import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const grades = [
    { subject: 'Математика', grade: 5, date: '15.11' },
    { subject: 'Русский язык', grade: 4, date: '14.11' },
    { subject: 'История', grade: 5, date: '13.11' },
    { subject: 'Физика', grade: 4, date: '12.11' },
  ];

  const schedule = [
    { time: '8:30', subject: 'Математика', room: '201' },
    { time: '9:30', subject: 'Русский язык', room: '105' },
    { time: '10:40', subject: 'Физика', room: '302' },
    { time: '11:50', subject: 'История', room: '208' },
  ];

  const teachers = [
    { name: 'Иванова М.П.', subject: 'Математика', experience: '15 лет' },
    { name: 'Петров С.А.', subject: 'Физика', experience: '12 лет' },
    { name: 'Сидорова Л.И.', subject: 'Русский язык', experience: '18 лет' },
  ];

  const news = [
    { title: 'День открытых дверей', date: '20.11.2024', preview: 'Приглашаем родителей и будущих учеников...' },
    { title: 'Олимпиада по математике', date: '18.11.2024', preview: 'Поздравляем победителей школьной олимпиады...' },
    { title: 'Новая библиотека', date: '15.11.2024', preview: 'Открытие обновленной школьной библиотеки...' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">МБОУ СОШ №45</h1>
                <p className="text-sm text-gray-600">Муниципальная школа</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost">Главная</Button>
              <Button variant="ghost">О школе</Button>
              <Button variant="ghost">Образование</Button>
              <Button variant="ghost">Учителя</Button>
              <Button variant="ghost">Контакты</Button>
            </nav>
            <Button className="bg-primary hover:bg-secondary">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Муниципальная школа <span className="text-primary">№45</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Качественное образование с современными технологиями и традициями. 
            Развиваем потенциал каждого ученика.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-secondary">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Поступить в школу
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs defaultValue="diary" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="diary">Дневник</TabsTrigger>
            <TabsTrigger value="about">О школе</TabsTrigger>
            <TabsTrigger value="education">Образование</TabsTrigger>
            <TabsTrigger value="teachers">Учителя</TabsTrigger>
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
            <TabsTrigger value="schedule">Расписание</TabsTrigger>
            <TabsTrigger value="documents">Документы</TabsTrigger>
          </TabsList>

          {/* Электронный дневник */}
          <TabsContent value="diary" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-2 text-primary" />
                    Последние оценки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {grades.map((grade, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                        <div>
                          <p className="font-medium">{grade.subject}</p>
                          <p className="text-sm text-gray-600">{grade.date}</p>
                        </div>
                        <Badge 
                          variant={grade.grade >= 5 ? "default" : grade.grade >= 4 ? "secondary" : "destructive"}
                          className="text-lg px-3 py-1"
                        >
                          {grade.grade}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                    Расписание на сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.map((lesson, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border-l-4 border-primary bg-gray-50 rounded-r-lg">
                        <div>
                          <p className="font-medium">{lesson.subject}</p>
                          <p className="text-sm text-gray-600">Кабинет {lesson.room}</p>
                        </div>
                        <Badge variant="outline">{lesson.time}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Успеваемость</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Средний балл</span>
                      <span>4.5/5.0</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Посещаемость</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* О школе */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="School" size={24} className="mr-2 text-primary" />
                  О нашей школе
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-lg mb-4">
                    МБОУ СОШ №45 - современное образовательное учреждение, основанное в 1985 году. 
                    За годы работы школа зарекомендовала себя как центр качественного образования.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <Icon name="Users" size={32} className="mx-auto text-primary mb-2" />
                      <h3 className="font-semibold text-xl">850+</h3>
                      <p className="text-gray-600">Учеников</p>
                    </div>
                    <div className="text-center">
                      <Icon name="UserCheck" size={32} className="mx-auto text-primary mb-2" />
                      <h3 className="font-semibold text-xl">65+</h3>
                      <p className="text-gray-600">Преподавателей</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Award" size={32} className="mx-auto text-primary mb-2" />
                      <h3 className="font-semibold text-xl">25+</h3>
                      <p className="text-gray-600">Наград и достижений</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Образование */}
          <TabsContent value="education" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Baby" size={20} className="mr-2 text-primary" />
                    Начальная школа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">1-4 классы. Основы грамотности, математики и развитие творческих способностей.</p>
                  <Badge>4 года обучения</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BookOpen" size={20} className="mr-2 text-primary" />
                    Основная школа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">5-9 классы. Углубленное изучение предметов и профориентация.</p>
                  <Badge>5 лет обучения</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="GraduationCap" size={20} className="mr-2 text-primary" />
                    Старшая школа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">10-11 классы. Профильное обучение и подготовка к ЕГЭ.</p>
                  <Badge>2 года обучения</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Учителя */}
          <TabsContent value="teachers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="User" size={32} className="text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">{teacher.name}</h3>
                      <p className="text-primary font-medium">{teacher.subject}</p>
                      <p className="text-sm text-gray-600 mt-2">Стаж: {teacher.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Новости */}
          <TabsContent value="news" className="space-y-6">
            <div className="space-y-6">
              {news.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <Icon name="Newspaper" size={24} className="text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-3">{item.preview}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{item.date}</Badge>
                          <Button variant="ghost" size="sm">
                            Читать далее
                            <Icon name="ArrowRight" size={16} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Контакты */}
          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-gray-600">ул. Школьная, 45, г. Москва</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-gray-600">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">school45@edu.mos.ru</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 8:00 - 18:00</p>
                      <p className="text-gray-600">Сб: 9:00 - 15:00</p>
                      <p className="text-gray-600">Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Расписание */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Расписание звонков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { lesson: '1 урок', time: '8:30 - 9:15' },
                    { lesson: '2 урок', time: '9:30 - 10:15' },
                    { lesson: '3 урок', time: '10:40 - 11:25' },
                    { lesson: '4 урок', time: '11:50 - 12:35' },
                    { lesson: '5 урок', time: '12:50 - 13:35' },
                    { lesson: '6 урок', time: '13:45 - 14:30' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                      <span className="font-medium">{item.lesson}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Документы */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="FileText" size={20} className="mr-2 text-primary" />
                  Документы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Устав школы',
                    'Правила внутреннего распорядка',
                    'Образовательная программа',
                    'Лицензия на образовательную деятельность',
                    'Свидетельство об аккредитации',
                    'Локальные акты'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="FileText" size={16} className="text-gray-400" />
                        <span>{doc}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;