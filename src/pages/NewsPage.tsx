import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { NewsArticle } from '../types';
import {
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  X,
  Share2,
  Bookmark,
  CheckCircle2,
  Tag
} from 'lucide-react';

export const NewsPage: React.FC = () => {
  const { news, selectedArticleSlug, setSelectedArticleSlug, setCurrentPage } = useCMS();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const modalArticle = selectedArticleSlug
    ? news.find((a) => a.slug === selectedArticleSlug) || null
    : null;

  const categories = ['all', 'Community Story', 'Education', 'Youth Empowerment', 'Announcement'];

  const filteredNews = news.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner (Professional Polish Theme) */}
      <section className="bg-[#002147] text-white py-16 border-b-4 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] bg-[#001733] px-3.5 py-1.5 rounded-sm border border-[#D4AF37]/30">
              Field Dispatches & Updates
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              News & Community Stories
            </h1>
            <p className="mt-3 text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              “BUILDING BRIGHTER FUTURE TOGETHER”
            </p>
            <p className="mt-4 text-base text-slate-200 leading-relaxed">
              Read direct stories from our field coordinators, beneficiaries, and community volunteers documenting education drives, vocational milestones, and social transformation in Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Toolbar: Category Filters & Search */}
      <section className="py-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 sm:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#002147] text-[#D4AF37] shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#002147]'
                  }`}
                >
                  {cat === 'all' ? 'All Stories' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D4AF37] text-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-sm border border-slate-200 p-8">
              <p className="text-base text-slate-600 font-medium">No stories found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-[#002147] font-bold hover:underline"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-sm border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-sm text-xs font-bold bg-[#002147] text-[#D4AF37] border border-[#D4AF37]/30">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                          {article.publishDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#002147] mb-2 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {article.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-sm bg-slate-100 text-[10px] font-bold text-[#002147]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 italic">By {article.author}</span>
                    <button
                      onClick={() => setSelectedArticleSlug(article.slug)}
                      className="text-xs font-bold text-[#002147] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {modalArticle && (
        <div className="fixed inset-0 z-50 bg-[#002147]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-slate-200">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-200">
              <img
                src={modalArticle.imageUrl}
                alt={modalArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticleSlug(null)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-[#002147]/90 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3.5 py-1 rounded-sm text-xs font-bold bg-[#D4AF37] text-[#002147]">
                  {modalArticle.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span>{modalArticle.publishDate}</span>
                  <span>•</span>
                  <span>By {modalArticle.author}</span>
                  <span>•</span>
                  <span>{modalArticle.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002147]">
                  {modalArticle.title}
                </h2>
              </div>

              <div className="p-4 rounded-sm bg-slate-50 border-l-4 border-[#D4AF37] border-y border-r border-slate-200 text-slate-800 text-xs sm:text-sm italic">
                “{modalArticle.excerpt}”
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
                {modalArticle.content}
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {modalArticle.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-sm bg-slate-100 text-[11px] font-semibold text-slate-700">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArticleSlug(null)}
                  className="px-6 py-2.5 rounded-sm text-xs font-bold bg-[#002147] text-[#D4AF37] hover:bg-[#001733] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
