import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  Database,
  BarChart3,
  Code,
  Brain,
  Target,
  Zap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    languages: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 75 },
    ],
    frameworks: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
      { name: "Flask", level: 70 },
    ],
    tools: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Excel", level: 95 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 75 },
    ],
  };

  const projects = [
    {
      id: "cinema-lease-analysis",
      title: "Cinema Lease Shop Analysis",
      description:
        "Comprehensive analysis of movie rental store operations to optimize inventory management and customer experience through data-driven insights.",
      achievements: [
        "Analyzed rental patterns and customer behavior to identify peak demand periods and popular movie categories",
        "Created interactive Power BI dashboards for real-time monitoring of store performance and inventory turnover",
        "Implemented advanced Excel models for revenue forecasting and customer segmentation analysis",
      ],
      tools: ["Power BI", "SQL", "Advanced Excel"],
      color: "data-blue",
      githubLink:
        "https://github.com/sankalpG007/Data-Analysis/tree/main/Movie%20Rental%20Store%20Analysis",
    },
    {
      id: "churn-analysis",
      title: "Customer Churn Analysis - Telecom Industry",
      description:
        "Built a machine learning pipeline to predict customer churn using Python (Pandas, Scikit-learn), SQL-based customer metrics.",
      achievements: [
        "Implemented Random Forest classifier and SHAP for feature explainability to identify key churn drivers",
        "Segmented customers into Loyal, At Risk, and Dormant groups using churn probabilities for strategic targeting",
      ],
      tools: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "SQL",
        "Random Forest",
        "SHAP",
      ],
      color: "data-green",
      githubLink:
        "https://github.com/sankalpG007/Data-Analysis/tree/main/Customer%20churn%20Analysis",
    },
    {
      id: "burnalytix-ai",
      title: "Burnalytix AI",
      description:
        "Developed a machine learning pipeline to predict calories burned using features like age, height, weight, and exercise patterns.",
      achievements: [
        "Employed regression models including Linear, Lasso, Ridge, Random Forest, SVM, and XGBoost, optimizing for prediction accuracy",
        "Conducted extensive EDA using Seaborn and Matplotlib to explore feature correlations and trends in physiological data",
        "Achieved high prediction accuracy through comprehensive model comparison and hyperparameter tuning",
      ],
      tools: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Seaborn",
        "Matplotlib",
        "Pandas",
        "NumPy",
      ],
      color: "data-purple",
      githubLink:
        "https://github.com/sankalpG007/Machine-Learning/tree/main/Burnalytix%20AI",
    },
    {
      id: "speech-recognition",
      title: "Speech Recognition System",
      description:
        "Developed an intelligent speech recognition system using machine learning algorithms to convert spoken language into text with high accuracy.",
      achievements: [
        "Implemented advanced audio preprocessing techniques including noise reduction and feature extraction using MFCC",
        "Built and trained neural network models for real-time speech-to-text conversion with 95% accuracy",
        "Integrated natural language processing for context-aware speech interpretation and command recognition",
      ],
      tools: [
        "Python",
        "TensorFlow",
        "Keras",
        "SpeechRecognition",
        "PyAudio",
        "MFCC",
        "NLP",
      ],
      color: "data-cyan",
      githubLink:
        "https://github.com/sankalpG007/Machine-Learning/tree/main/pythonSpeechRecognisation",
    },
  ];

  const workExperience = [
    {
      title: "DATA ANALYST INTERN",
      company: "SS INFOTECH",
      period: "June 2025 - Present",
      responsibilities: [
        "Performed data cleaning & EDA using Excel, SQL, and BI tools",
        "Built Django backend and automated Power BI/Tableau dashboards for data visualization",
        "Collaborated across teams to enhance data-driven decision-making and reporting efficiency",
      ],
    },
    {
      title: "Data ANALYST INTERN",
      company: "Elevate Labs",
      period: "May 2025 - June 2025",
      responsibilities: [
        "Analysed business data using Python (Pandas, NumPy) and SQL to extract actionable insights",
        "Designed interactive dashboards and visualizations (Tableau/Power BI) for performance tracking",
        "Automated data workflows and reporting to streamline decision-making processes",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application (MCA (AI/ML))",
      institution: "Ramdeobaba University",
      location: "Nagpur, India",
      period: "August 2024 - May 2026",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Dr SC Gulhane Prerna College",
      location: "Nagpur, India",
      period: "Sept 2021 - May 2024",
    },
  ];

  const certificates = [
    "IBM Data Analyst Certificate",
    "Python HackerRank Certificate",
    "SQL HackerRank Certificate",
    "Prompt Engineering",
    "Excel to Power BI Certificate",
    "Tableau and Visualization Certificate",
  ];

  const leadership = [
    {
      title: "Hackathon Team Leader",
      description: "Led a team of 6 to build a project",
    },
    {
      title: "Vice President, MCA Department",
      description: "Coordinated events and workshops",
    },
    {
      title: "Rotaract Club",
      description: "Volunteered in social and technical community service",
    },
    {
      title: "Google Developer Student Club (GDSC)",
      description: "Participated in open-source and coding events",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const NavItems = () => (
    <>
      {["About", "Experience", "Projects", "Education", "Contact"].map(
        (item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === item.toLowerCase()
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {item}
          </button>
        ),
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Sankalp Singh</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavItems />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavItems />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Data Analyst &{" "}
                  <span className="text-primary">AI/ML Enthusiast</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transforming raw data into actionable insights through
                  advanced analytics, machine learning, and interactive
                  visualizations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary hover:bg-primary/90"
                >
                  View My Work
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Nagpur, India
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  singhsankalp880@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 8668584873
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="http://linkedin.com/in/sankalp-singh-48670b21a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/sankalpG007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-data-blue/10 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-data-blue" />
                      </div>
                      <div>
                        <div className="font-semibold">Power BI</div>
                        <div className="text-sm text-muted-foreground">
                          Expert
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-data-green/10 rounded-lg">
                        <Database className="h-6 w-6 text-data-green" />
                      </div>
                      <div>
                        <div className="font-semibold">SQL</div>
                        <div className="text-sm text-muted-foreground">
                          Advanced
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-data-orange/10 rounded-lg">
                        <Code className="h-6 w-6 text-data-orange" />
                      </div>
                      <div>
                        <div className="font-semibold">Python</div>
                        <div className="text-sm text-muted-foreground">
                          Expert
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-data-purple/10 rounded-lg">
                        <Brain className="h-6 w-6 text-data-purple" />
                      </div>
                      <div>
                        <div className="font-semibold">ML</div>
                        <div className="text-sm text-muted-foreground">
                          Advanced
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Currently pursuing MCA (AI/ML) at Ramdeobaba University, I'm
              passionate about extracting meaningful insights from complex
              datasets. With hands-on experience in data analysis, machine
              learning, and business intelligence tools, I help organizations
              make data-driven decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Programming Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-data-blue" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.languages.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Frameworks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-data-green" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-data-orange" />
                  Analytics Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Rapport Building",
                "Team Collaboration",
                "People Management",
                "Excellent Communication",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-4"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building expertise through hands-on data analysis projects
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Building className="h-4 w-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {job.period}
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Target className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing real-world data analysis and machine learning solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id,
                  )
                }
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="outline"
                            className="text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>

                  {expandedProject === project.id && (
                    <div className="space-y-4 border-t pt-4">
                      <h4 className="font-semibold text-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Zap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        {project.githubLink && (
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Education & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="grid gap-3">
                {certificates.map((cert, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{cert}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 justify-center">
              <Users className="h-6 w-6 text-primary" />
              Leadership & Extracurricular Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((activity, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">{activity.title}</h4>
                    <p className="text-muted-foreground">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities to apply data analysis
              and machine learning to solve real-world problems. Let's connect!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:singhsankalp880@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    singhsankalp880@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <a
                    href="tel:+918668584873"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8668584873
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <span className="text-muted-foreground">Nagpur, India</span>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="flex justify-center gap-6">
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="http://linkedin.com/in/sankalp-singh-48670b21a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://github.com/sankalpG007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Sankalp Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
