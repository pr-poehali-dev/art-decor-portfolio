import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Home',
      title: 'Монтаж лепного декора',
      description: 'Профессиональная установка декоративных элементов в интерьерах и на фасадах'
    },
    {
      icon: 'Package',
      title: 'Полиуретан и гипс',
      description: 'Монтаж лепнины из полиуретана и установка гипсовых 3D-панелей'
    },
    {
      icon: 'Wrench',
      title: 'Реставрация',
      description: 'Восстановление исторических декоративных элементов с сохранением оригинала'
    },
    {
      icon: 'Pencil',
      title: 'Разработка эскизов',
      description: 'Создание индивидуальных дизайн-проектов лепного декора'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/files/51e14c55-7e9f-4a19-899e-90f6366b9ec2.jpg',
      title: 'Классический интерьер',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/files/80cac641-e1f7-442d-ae1f-92d6a803fd40.jpg',
      title: 'Лепной декор потолка',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/files/255a0e7b-87ba-4ce7-a2e4-60b9740168ae.jpg',
      title: '3D-панели',
      category: 'Монтаж'
    },
    {
      image: 'https://cdn.poehali.dev/files/4c37c9f1-fb16-462d-a9d5-33c8b5fd024d.jpg',
      title: 'Кессонные потолки',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/files/4a42cab0-cc3d-4350-862c-a5c65631a3cb.jpg',
      title: 'Изготовление элементов',
      category: 'Производство'
    },
    {
      image: 'https://cdn.poehali.dev/files/4acfe737-f084-404f-9cf2-10c330be2675.jpg',
      title: 'Волновые 3D-панели',
      category: 'Монтаж'
    },
    {
      image: 'https://cdn.poehali.dev/files/5174b67e-e0f1-4053-9ed8-dad2924b1963.jpg',
      title: 'Монтаж декоративных рам',
      category: 'Монтаж'
    },
    {
      image: 'https://cdn.poehali.dev/files/aff39151-4d9b-49ea-9210-a0f762117257.jpg',
      title: 'Потолочные розетки',
      category: 'Интерьер'
    },
    {
      image: 'https://cdn.poehali.dev/files/ebbda868-6f81-4a10-969e-2e79071be5f8.jpg',
      title: 'Гипсовая лепнина на потолке',
      category: 'Интерьер'
    }
  ];

  const process = [
    { step: '01', title: 'Консультация', description: 'Обсуждение проекта и замеры' },
    { step: '02', title: 'Эскиз', description: 'Разработка дизайн-проекта' },
    { step: '03', title: 'Изготовление', description: 'Создание декоративных элементов' },
    { step: '04', title: 'Монтаж', description: 'Профессиональная установка' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ВС</span>
              </div>
              <h1 className="text-xl font-semibold">Вуриеи Студиа</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Портфолио', 'Услуги', 'О студии', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="w-16 h-1 bg-primary mb-6"></div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Искусство лепного декора
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Создаем утонченные интерьеры и фасады с изысканной лепниной. 
                Монтаж, реставрация и индивидуальные эскизы от профессионалов.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" onClick={() => scrollToSection('портфолио')}>
                  Наши работы
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')}>
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-lg"></div>
              <img
                src="https://cdn.poehali.dev/files/51e14c55-7e9f-4a19-899e-90f6366b9ec2.jpg"
                alt="Лепной декор"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по созданию и установке декоративных элементов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры наших проектов в классическом стиле
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, idx) => (
              <div key={idx} className="group cursor-pointer overflow-hidden rounded-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm mb-2">{item.category}</p>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о-студии" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h2 className="text-4xl font-bold">О нашей студии</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы — команда профессионалов с многолетним опытом в создании и монтаже лепного декора. 
                Работаем с интерьерами и фасадами, используя современные материалы и классические техники.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">15+ лет опыта</h4>
                    <p className="text-muted-foreground">Профессиональная работа с лепниной</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">300+ проектов</h4>
                    <p className="text-muted-foreground">Реализованных интерьеров и фасадов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Индивидуальный подход</h4>
                    <p className="text-muted-foreground">Разработка уникальных эскизов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/255a0e7b-87ba-4ce7-a2e4-60b9740168ae.jpg"
                alt="Работа мастера"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-4">Процесс работы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От консультации до финального монтажа
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="inline-block">
                  <div className="text-6xl font-bold text-primary/20">{item.step}</div>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground">
              Готовы обсудить ваш проект
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@vuriey.studio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Вуриеи Студиа. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Facebook" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Phone" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;