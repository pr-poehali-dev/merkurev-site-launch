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
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">merkurev.space</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#articles" className="hover:text-primary transition-colors">Статьи</a>
              <a href="#about" className="hover:text-primary transition-colors">Об авторе</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 gradient-text animate-in fade-in slide-in-from-bottom-4 duration-700">
              Блог о технологиях, дизайне и жизни
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Делюсь мыслями, опытом и идеями в современном цифровом мире
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Button size="lg" className="text-lg px-8 shadow-lg hover-lift">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-lift">
                <Icon name="Mail" size={20} className="mr-2" />
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

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 text-sm transition-all hover-lift"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card
                key={article.id}
                className="overflow-hidden hover-lift cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {article.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="group">
                      Читать
                      <Icon name="ArrowRight" size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Об авторе</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Привет! Я создаю цифровые продукты и делюсь своим опытом в сфере технологий, дизайна и предпринимательства.
              В этом блоге я пишу о том, что меня вдохновляет, о своих проектах и наблюдениях за индустрией.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" className="hover-lift">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center overflow-hidden relative">
            <div className="absolute inset-0 gradient-bg opacity-30"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl md:text-4xl gradient-text">
                Подпишитесь на новости
              </CardTitle>
              <CardDescription className="text-base">
                Получайте новые статьи прямо на почту. Никакого спама, только качественный контент.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12"
                />
                <Button size="lg" className="shadow-lg hover-lift">
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