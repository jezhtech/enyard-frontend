import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, TrendingUp, BookOpen, Code, Lightbulb } from 'lucide-react';

const Blog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredPost = {
    title: 'The Future of AI in Software Development: How ENYARD is Leading the Revolution',
    excerpt: 'Discover how artificial intelligence is transforming the software development landscape and how ENYARD is pioneering innovative solutions that are changing the industry.',
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80'
  };

  const blogPosts = [
    {
      title: 'Building Scalable Cloud-Native Applications with Modern Architecture',
      excerpt: 'Learn the best practices for developing cloud-native applications that scale effortlessly and deliver exceptional performance.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Architecture', 'Scalability']
    },
    {
      title: 'The Rise of Low-Code Development: Empowering Non-Technical Users',
      excerpt: 'Explore how low-code platforms are democratizing software development and enabling rapid application creation.',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Development',
      tags: ['Low-Code', 'Innovation', 'Productivity']
    },
    {
      title: 'Implementing AI-Powered Analytics in Healthcare Management Systems',
      excerpt: 'Discover how AI analytics are revolutionizing healthcare management and improving patient outcomes.',
      author: 'Dr. Emily Roberts',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Healthcare Tech',
      tags: ['AI', 'Healthcare', 'Analytics']
    },
    {
      title: 'Security Best Practices for Modern Web Applications',
      excerpt: 'Essential security measures every developer should implement to protect web applications from threats.',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Security',
      tags: ['Security', 'Web Development', 'Best Practices']
    },
    {
      title: 'The Evolution of ERP Systems: From Traditional to AI-Enhanced',
      excerpt: 'How AI is transforming enterprise resource planning systems and driving business efficiency.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Enterprise',
      tags: ['ERP', 'AI', 'Enterprise']
    },
    {
      title: 'User Experience Design Trends That Will Shape 2024',
      excerpt: 'The latest UX trends and design principles that will define user experiences in the coming year.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'Design',
      tags: ['UX', 'Design', 'Trends']
    }
  ];

  const categories = [
    { name: 'AI & Technology', count: 15, icon: Lightbulb },
    { name: 'Cloud Computing', count: 12, icon: TrendingUp },
    { name: 'Development', count: 20, icon: Code },
    { name: 'Healthcare Tech', count: 8, icon: BookOpen },
    { name: 'Security', count: 10, icon: User },
    { name: 'Enterprise', count: 14, icon: Calendar }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 gradient-hero opacity-30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="container relative z-10 text-center">
          <div className="stagger-item" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient-animate">
              ENYARD Blog
            </h1>
          </div>
          
          <div className="stagger-item" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Insights, tutorials, and thought leadership on AI, software development, 
              and the future of technology innovation.
            </p>
          </div>
          
          <div className="stagger-item max-w-md mx-auto" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass"
              />
            </div>
          </div>
        </div>

        <div className="floating-orb w-64 h-64 top-10 right-10 bg-gradient-to-br from-purple-400 to-pink-600 opacity-20" />
        <div className="floating-orb w-48 h-48 bottom-10 left-10 bg-gradient-to-br from-blue-400 to-cyan-600 opacity-20" />
      </section>

      {/* Featured Article */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden magnetic-card glass-strong">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-full">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {featuredPost.category}
                </Badge>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <Button className="w-fit">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden magnetic-card glass group">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="p-6 glass">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <category.icon className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 glass text-center">
                <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest insights and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" />
                  <Button className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;