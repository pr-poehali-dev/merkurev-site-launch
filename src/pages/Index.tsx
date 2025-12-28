import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Технологии', 'Дизайн', 'Бизнес', 'Личное', 'Путешествия'];

const articles = [
  {
    id: 1,
    title: 'Будущее веб-разработки: тренды 2025',
    excerpt: 'Исследуем самые важные технологии и подходы, которые изменят индустрию в следующем году.',
    category: 'Технологии',
    date: '15 декабря 2024',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
  },
  {
    id: 2,
    title: 'Философия минимализма в дизайне',
    excerpt: 'Как меньше деталей создают больше впечатления и улучшают пользовательский опыт.',
    category: 'Дизайн',
    date: '12 декабря 2024',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
  },
  {
    id: 3,
    title: 'Как я запустил стартап за 30 дней',
    excerpt: 'Реальная история создания продукта с нуля: от идеи до первых клиентов.',
    category: 'Бизнес',
    date: '8 декабря 2024',
    readTime: '12 мин',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: 4,
    title: 'Искусство баланса: работа и жизнь',
    excerpt: 'Мои мысли о том, как находить гармонию между карьерой и личным временем.',
    category: 'Личное',
    date: '5 декабря 2024',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
  },
  {
    id: 5,
    title: 'Токио: город контрастов',
    excerpt: 'Заметки о путешествии в столицу Японии, где традиции встречаются с будущим.',
    category: 'Путешествия',
    date: '1 декабря 2024',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80'
  },
  {
    id: 6,
    title: 'Продуктивность через простоту',
    excerpt: 'Как отказ от сложных систем помог мне делать больше качественной работы.',
    category: 'Личное',
    date: '28 ноября 2024',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 glass border-b">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold gradient-text">merkurev.space</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#articles" className="font-medium hover:text-primary transition-all hover:scale-105">Статьи</a>
              <a href="#about" className="font-medium hover:text-primary transition-all hover:scale-105">Об авторе</a>
              <a href="#contact" className="font-medium hover:text-primary transition-all hover:scale-105">Контакты</a>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-24 md:py-40">
        <div className="absolute inset-0 gradient-bg opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-in fade-in duration-700">
              <span className="text-sm font-semibold text-primary">✨ Добро пожаловать</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 gradient-text animate-in fade-in slide-in-from-bottom-4 duration-700 leading-tight">
              Блог о технологиях, дизайне и жизни
            </h2>
            <p className="text-xl md:text-3xl text-muted-foreground/90 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 font-medium max-w-3xl mx-auto leading-relaxed">
              Делюсь мыслями, опытом и идеями в современном цифровом мире
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Button size="lg" className="text-lg px-10 py-7 shadow-2xl hover-lift glow font-semibold rounded-2xl">
                <Icon name="BookOpen" size={22} className="mr-2" />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 hover-lift font-semibold rounded-2xl border-2">
                <Icon name="Mail" size={22} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по статьям и архиву..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer px-6 py-3 text-sm font-semibold transition-all rounded-full border-2 ${
                    selectedCategory === category 
                      ? 'shadow-lg glow scale-105' 
                      : 'hover:scale-105 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card
                key={article.id}
                className="overflow-hidden hover-lift cursor-pointer animate-in fade-in slide-in-from-bottom-4 border-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-semibold">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground font-medium">{article.date}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
                      <Icon name="Clock" size={16} />
                      {article.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn font-semibold">
                      Читать
                      <Icon name="ArrowRight" size={16} className="ml-2 transition-transform group-hover/btn:translate-x-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32 gradient-bg relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 gradient-text">Об авторе</h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed font-medium">
              Привет! Я создаю цифровые продукты и делюсь своим опытом в сфере технологий, дизайна и предпринимательства.
              В этом блоге я пишу о том, что меня вдохновляет, о своих проектах и наблюдениях за индустрией.
            </p>
            <div className="flex justify-center gap-5">
              <Button variant="outline" size="icon" className="hover-lift h-14 w-14 border-2 rounded-2xl">
                <Icon name="Github" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift h-14 w-14 border-2 rounded-2xl">
                <Icon name="Linkedin" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift h-14 w-14 border-2 rounded-2xl">
                <Icon name="Twitter" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-3xl mx-auto text-center overflow-hidden relative border-2 shadow-2xl">
            <div className="absolute inset-0 gradient-bg opacity-40"></div>
            <CardHeader className="relative z-10 pt-12 pb-8 space-y-4">
              <CardTitle className="text-4xl md:text-5xl gradient-text font-black">
                Подпишитесь на новости
              </CardTitle>
              <CardDescription className="text-lg md:text-xl text-foreground/70 font-medium max-w-xl mx-auto">
                Получайте новые статьи прямо на почту. Никакого спама, только качественный контент.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pb-12 px-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 text-base border-2 rounded-xl"
                />
                <Button size="lg" className="shadow-xl hover-lift glow h-14 px-8 font-bold rounded-xl">
                  <Icon name="Send" size={20} className="mr-2" />
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer id="contact" className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">merkurev.space</h3>
              <p className="text-muted-foreground">
                Блог о технологиях, дизайне и предпринимательстве
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <div className="flex flex-col gap-2">
                <a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">Статьи</a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Об авторе</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <a href="mailto:hello@merkurev.space" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  hello@merkurev.space
                </a>
                <div className="flex gap-3 mt-2">
                  <Button variant="ghost" size="icon">
                    <Icon name="Github" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground pt-8 border-t">
            <p>© 2024 merkurev.space. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;