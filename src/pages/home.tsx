import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  HeartHandshake,
  UserRound,
  ShieldCheck,
  Info,
  UserCheck,
  PhoneCall,
  Video,
  CircleCheck,
  Check,
  Users,
  Brain,
  ArrowLeftRight,
  BedDouble,
  Footprints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-rehab.png";
import therapistImage from "@/assets/therapist-video.png";

const CLASS_SIGNUP_URL =
  "https://e22f823f-6ce6-4ec7-928a-249c39d29133-00-22xqkt9bas4zr.sisko.replit.dev/";

const MY_PAGE_URL = "https://rehab-coach-ai.replit.app/";

const painPoints = [
  {
    title: "힘든 병원 왕복",
    desc: "휠체어 이동, 차량 탑승 등 병원에 가는 과정 자체가 너무 벅찹니다.",
    icon: <UserCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "막막한 가정 재활",
    desc: "집에서 어떻게 운동을 시켜야 할지 몰라 불안하고 막막합니다.",
    icon: <Info className="w-6 h-6 text-primary" />,
  },
  {
    title: "보호자의 부담감",
    desc: "보호자 혼자서 모든 것을 감당하려니 체력적, 심리적으로 지칩니다.",
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
  },
];

const processSteps = [
  {
    step: 1,
    title: "무료 상담 신청",
    desc: "연락처만 남겨주시면, 현재 환자분의 상태와 고민을 편안하게 나눌 수 있도록 전화로 연락드립니다.",
    icon: <PhoneCall className="w-6 h-6" />,
  },
  {
    step: 2,
    title: "치료사와 화상 연결",
    desc: "약속된 시간에 스마트폰이나 태블릿으로 화상 통화를 연결하여, 치료사가 환자분의 움직임을 직접 살펴봅니다.",
    icon: <Video className="w-6 h-6" />,
  },
  {
    step: 3,
    title: "보호자와 함께 재활 시작",
    desc: "치료사의 실시간 지도에 따라 보호자가 환자를 안전하게 보조하며 맞춤형 재활 운동을 진행합니다.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
];

const expertPoints = [
  "신경계 전문 재활 병원 임상 경력 보유",
  "PNF(고유수용성 신경근 촉진법) 및 ICF 기반 맞춤형 프로그램 설계",
  "안전한 보조 방법에 대한 보호자 밀착 교육",
];

const caregiverEducationItems = [
  {
    category: "이론 교육",
    title: "뇌졸중 이해하기",
    desc: "뇌졸중의 원인과 회복 과정, 재발 경고 신호를 알기 쉽게 알려드립니다.",
    icon: <Brain className="w-6 h-6 text-primary" />,
  },
  {
    category: "이론 교육",
    title: "스트레스·우울 관리",
    desc: "환자와 보호자 모두의 마음 건강을 지키는 스트레스 관리 방법을 배웁니다.",
    icon: <HeartHandshake className="w-6 h-6 text-primary" />,
  },
  {
    category: "실기 교육",
    title: "이승 동작 보조",
    desc: "침대와 휠체어 사이를 안전하게 옮기는 보조 기술을 직접 실습합니다.",
    icon: <ArrowLeftRight className="w-6 h-6 text-primary" />,
  },
  {
    category: "실기 교육",
    title: "체위 변경·욕창 예방",
    desc: "올바른 자세 바꾸기와 욕창을 예방하는 관리 요령을 익힙니다.",
    icon: <BedDouble className="w-6 h-6 text-primary" />,
  },
  {
    category: "실기 교육",
    title: "보행 보조·보조도구 사용",
    desc: "걷기 연습을 도울 때의 안전한 위치와 보조도구 사용법을 배웁니다.",
    icon: <Footprints className="w-6 h-6 text-primary" />,
  },
  {
    category: "실기 교육",
    title: "낙상 예방·환경 점검",
    desc: "집안 환경을 함께 점검하고 낙상 위험을 줄이는 방법을 안내합니다.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
];

const faqItems = [
  {
    value: "item-1",
    question: "비용은 어떻게 되나요?",
    answer:
      "첫 상담 및 안내는 100% 무료로 진행됩니다. 상담을 통해 환자분의 상태와 필요한 세션 횟수를 파악한 후, 무리되지 않는 합리적인 비용을 투명하게 안내해 드립니다. 상담 후 진행하지 않으셔도 전혀 괜찮습니다.",
  },
  {
    value: "item-2",
    question: "무엇을 준비해야 하나요?",
    answer:
      "화상 통화가 가능한 스마트폰이나 태블릿 하나면 충분합니다. 복잡한 기기나 도구는 필요하지 않으며, 집안의 평범한 공간에서 안전하게 진행할 수 있도록 치료사가 화면을 보며 환경 설정을 도와드립니다.",
  },
  {
    value: "item-3",
    question: "1회 코칭은 얼마나 걸리나요?",
    answer:
      "보통 1회에 40분~50분 정도 소요됩니다. 환자분의 체력과 당일 컨디션에 따라 유연하게 조절하며, 중간중간 충분한 휴식 시간을 가지며 안전을 최우선으로 진행합니다.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="font-semibold text-lg text-primary flex items-center gap-2">
            <HeartHandshake className="w-6 h-6" />
            <span>온라인 재활 코칭</span>
          </div>
          <a
            href={MY_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            aria-label="마이페이지"
            data-testid="button-mypage"
          >
            <UserRound className="w-4 h-4" />
            마이페이지
          </a>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-primary/10 text-sm font-medium text-primary mb-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <ShieldCheck className="w-4 h-4" />
            <span>재활 전문 치료사 직접 코칭 · 보호자 교육 포함</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100">
            병원 가는 길이, <br className="md:hidden" />
            재활보다 더 힘드셨다면
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
            이동이 어려운 뇌졸중 환자와 보호자를 위한 온라인 재활.{" "}
            <br className="hidden md:block" />
            치료사가 화면 너머로 함께 봐 드립니다.
          </p>
          <div className="w-full max-w-md mx-auto mb-16 animate-in zoom-in-95 fade-in duration-700 delay-300">
            <img
              src={heroImage}
              alt="환자와 보호자가 함께 태블릿으로 재활 코칭을 받는 모습"
              className="w-full h-auto rounded-2xl shadow-xl border border-white/50"
              data-testid="img-hero"
            />
          </div>
          <div className="w-full max-w-xs animate-in slide-in-from-bottom-10 fade-in duration-700 delay-400">
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-full"
              data-testid="button-cta-hero"
            >
              <a
                href={CLASS_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                수업 신청하기
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              <Info className="w-4 h-4" />첫 상담은 무료, 언제든 그만두셔도
              괜찮아요
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            이런 고민 있으셨나요?
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors duration-300 flex flex-col items-center text-center group"
                data-testid={`card-painpoint-${i}`}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary/5">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            이렇게 진행됩니다
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-primary/20 md:left-1/2 md:-ml-px hidden md:block" />
            <div className="space-y-12">
              {processSteps.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-start md:justify-between md:even:flex-row-reverse gap-8"
                  data-testid={`process-step-${i}`}
                >
                  <div className="hidden md:block w-[45%]" />
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg relative z-10 border-4 border-background">
                    {item.step}
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-border md:w-[45%] flex-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={therapistImage}
                alt="화상으로 코칭하는 치료사 일러스트"
                className="w-full max-w-sm h-auto rounded-2xl shadow-md rotate-2 hover:rotate-0 transition-transform duration-500"
                data-testid="img-therapist"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-border shadow-sm">
                <CircleCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">검증된 전문가</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                임상 경험이 풍부한
                <br />
                전문 치료사가 함께합니다.
              </h2>
              <p className="text-lg text-muted-foreground">
                병원 현장에서 오랜 기간 뇌졸중 환자의 회복을 도운 치료사들이
                꼼꼼하게 지도합니다.
              </p>
              <ul className="space-y-3">
                {expertPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="mt-2 border-primary/30 text-primary hover:bg-primary/10"
              >
                <Link href="/therapists" data-testid="button-open-therapist-list">
                  <Users className="w-4 h-4 mr-2" />
                  선생님 리스트 확인하기
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10 mb-4">
              <HeartHandshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                보호자 교육 안내
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              보호자가 배우면, 회복이 달라집니다.
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              연구에 따르면 환자와 보호자가 함께 재활 교육을 받으면 환자의 재활
              동기와 기능 회복이 높아지고, 보호자의 돌봄 스트레스는 줄고 돌봄
              능숙도는 향상됩니다. 코칭 과정에서 아래 내용을 함께 교육해
              드립니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {caregiverEducationItems.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors duration-300 flex flex-col items-center text-center group"
                data-testid={`card-caregiver-education-${i}`}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-primary mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            참고: 정범철·김현주, 「뇌졸중 환자와 가족 보호자를 위한 재활 교육
            프로그램의 효과」, 한국콘텐츠학회 종합학술대회 논문집(2015).
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            자주 묻는 질문
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="bg-white px-6 rounded-2xl border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-t from-primary/10 to-background border-t border-primary/10">
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            집에서 시작하는 안전한 재활,
            <br />
            지금 바로 상의해보세요.
          </h2>
          <div className="w-full max-w-xs">
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-full"
              data-testid="button-cta-bottom"
            >
              <a
                href={CLASS_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                수업 신청하기
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              <Info className="w-4 h-4" />첫 상담은 무료, 언제든 그만두셔도
              괜찮아요
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-white border-t border-border">
        <div className="container max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <HeartHandshake className="w-6 h-6" />
            <span>온라인 재활 코칭</span>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p className="mb-2">환자와 보호자의 편안한 일상을 응원합니다.</p>
            <p className="mb-2">
              문의:{" "}
              <a
                href="mailto:bodylover@naver.com"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                bodylover@naver.com
              </a>
            </p>
            <Link href="/assessment" data-testid="link-assessment-form">
              <span className="hover:text-primary transition-colors underline underline-offset-4 cursor-pointer">
                치료사용 평가지 작성
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
