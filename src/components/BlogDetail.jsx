import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBanner from './common/PageBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const socialmedia = [{
  name: "LinkedIn",
  Link: "https://www.linkedin.com/company/ayfiz"
}, {
  name: "Instagram",
  Link: "https://www.instagram.com/ayfizabsolutes"
}, {
  name: "Facebook",
  Link: "https://www.facebook.com/ayfizabsolutes/"
}]

const BlogDetail = () => {
  const { id } = useParams();
  const { slug } = useParams();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);   // single blog
  const [allBlogs, setAllBlogs] = useState([]); // for sidebar

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 Single blog by slug
        const res1 = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/ayfiz-trade/blogs/${slug}`
        );
        const data1 = await res1.json();

        console.log("DETAIL API:", data1);

        if (res1.ok) {
          setPost(data1.blog || data1); // adjust if needed
        }

        // 🔹 All blogs (for related list)
        const res2 = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/ayfiz-trade/blogs`
        );
        const data2 = await res2.json();

        console.log("LIST API:", data2);

        if (res2.ok) {
          setAllBlogs(Array.isArray(data2.blogs) ? data2.blogs : []);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchData();
  }, [slug]);
  
  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      setIsError(true);
      return;
    }

    // simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Subscribed successfully ✅");
        setIsError(false);
        setEmail("");

        setTimeout(() => setMessage(""), 2000);
      } else if (response.status === 422) {
        setMessage(data.message || "Already subscribed");
        setIsError(true);

        setTimeout(() => setMessage(""), 2000);
      } else {
        setMessage("Something went wrong. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Please try again.");
      setIsError(true);
    }

    setLoading(false);
  };
  const cleanHtmlContent = (html) => {
    return html
      ?.replace(/&nbsp;/g, " ")     // remove &nbsp;
      ?.replace(/<[^>]+>/g, "")     // remove HTML tags
      ?.replace(/\s+/g, " ")        // remove extra spaces
      ?.trim();                     // clean start/end spaces
  };

  const formatMonthYear = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div className="bg-white min-h-screen text-brand-dark font-sans antialiased">
      <PageBanner title="BLOG" path="Home" />

      {/* Header */}
      <header className="relative border-b border-gray-200">
        <div className="max-w-8xl mx-auto  px-16 flex flex-col lg:flex-row min-h-[60vh]  [@media(max-width:768px)]:px-4">

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:w-1/2 py-10  flex flex-col justify-center bg-white order-2 lg:order-1"
          >
            <Link to="/blog" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-12 hover:text-brand-accent transition-all group">
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Dispatch
            </Link>

            <div className="inline-block bg-brand-primary text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest w-fit mb-6">
              {post?.categories?.[0]}
            </div>

            <h1 className="text-4xl  [@media(max-width:768px)]:text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.95] mb-8">
              {post?.title}
            </h1>

            <div className="flex items-center gap-6 border-t border-gray-100 pt-8">
              <div className="text-xs font-black uppercase tracking-widest">
                <p className="text-gray-400 mb-1">Author</p>
                <p>{post?.author || "Ayfiz Team"}</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="text-xs font-black uppercase tracking-widest">
                <p className="text-gray-400 mb-1">Published</p>
                <p>{formatMonthYear(post?.publish_date)}</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative overflow-hidden order-1 lg:order-2 bg-gray-100"
          >
            <img
              src={post?.featured_image}
              alt={post?.title}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            />
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-8xl mx-auto border-x border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Article */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-8 p-10 lg:p-20 border-r border-gray-200"
          >
            <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed">

              <p className="text-2xl font-bold text-brand-dark leading-snug mb-12 border-l-4 border-brand-accent pl-8">
                The logistics industry is undergoing a massive transformation...
              </p>

              <p>
                {cleanHtmlContent(post?.content)}
              </p>

              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-16 p-12 bg-brand-soft border border-brand-primary/20 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-2xl font-bold italic text-brand-dark leading-tight uppercase tracking-tight">
                    "The integration of ATS protocols has reduced transit friction..."
                  </p>
                  <cite className="block mt-6 text-xs font-black uppercase tracking-widest text-brand-primary">— Internal Sector Report, 2026</cite>
                </div>
                <span className="absolute -bottom-8 -right-4 text-[120px] font-black text-brand-dark/5 select-none">ATS</span>
              </motion.blockquote>
              <Link to="/contact">
                <h2 className="text-3xl font-bold hover:italic hover:underline text-brand-dark uppercase tracking-tighter mb-8 hover:text-brand-primary">
                  Connecting You to Global Trade
                </h2>

                <p>
                  Reach out to discuss your requirements, explore opportunities, or get expert guidance across international markets.
                </p>
              </Link>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="border border-gray-200 my-16 p-10"
              >
                <h4 className="font-black text-brand-primary uppercase tracking-[0.2em] text-xs mb-6">
                  Related Blogs
                </h4>

                <ul className="text-sm italic space-y-4 font-medium">
                  {(allBlogs.length > 0
                    ? (
                      // 👉 First try: same category
                      allBlogs.filter(item =>
                        item.slug !== slug &&
                        item.categories?.[0] === post?.categories?.[0]
                      ).length > 0

                        ? allBlogs.filter(item =>
                          item.slug !== slug &&
                          item.categories?.[0] === post?.categories?.[0]
                        )

                        // 👉 Fallback: show any other blogs
                        : allBlogs.filter(item => item.slug !== slug)
                    )
                    : []
                  )
                    .slice(0, 6)
                    .map((item) => (
                      <motion.li key={item.post_id} variants={fadeUp}>
                        <Link
                          to={`/blog/${item.slug}`}
                          className="hover:text-brand-primary transition-colors"
                        >
                          • {item.title}
                        </Link>
                      </motion.li>
                    ))}
                </ul>
              </motion.div>
            </article>

            {/* Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-gray-100 flex items-center justify-between"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Share Report</span>
              <div className="flex gap-4 flex-wrap  [@media(max-width:768px)]:mx-4 ">
                {socialmedia.map((platform) => (
                  <button key={platform.name}
                    onClick={() => window.open(platform.Link, "_blank")}
                    className="text-xs font-black uppercase tracking-widest px-6 py-3 border border-gray-200 hover:bg-brand-dark hover:text-white transition-all">
                    {platform.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-gray-50"
          >
            <div className="sticky top-0 p-10 lg:p-16 space-y-16">

              {/* Author */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-8 underline underline-offset-8">Analyst Profile</h3>
                <div className="flex flex-col gap-6">
                  {/* <div className="w-20 h-20 bg-brand-dark text-white flex items-center justify-center text-3xl font-bold">
                    {post?.author}
                    {post.author.charAt(0)}
                  </div> */}
                  <div>
                    <p className="text-xl font-bold uppercase tracking-tight">{post?.author || "Ayfiz Team"}</p>
                    <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mt-1">{post?.role}</p>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                      Specializing in integrated terminal operations...
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-brand-primary p-10 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 leading-none">
                  Subscribe to the <br />ATS Report
                </h3>

                <p className="text-sm text-blue-100 mb-6 opacity-80">
                  Join 15,000+ logistics professionals...
                </p>

                <div className="space-y-3">
                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 p-4 text-sm outline-none focus:bg-white/20"
                  />

                  {/* Button */}
                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="w-full bg-brand-dark text-white text-xs font-black uppercase tracking-widest py-4 hover:bg-brand-accent transition-all disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Get Access"}
                  </button>

                  {/* Message */}
                  {message && (
                    <p className={`text-sm mt-2 ${isError ? "text-red-300" : "text-green-300"}`}>
                      {message}
                    </p>
                  )}
                </div>
              </motion.div>

            </div>
          </motion.aside>

        </div>
      </main>
    </div>
  );
};

export default BlogDetail;