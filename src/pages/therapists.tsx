import { useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, GraduationCap } from "lucide-react";
import therapistKimMinjun from "@/assets/therapist-kim-minjun.png";
import therapistLeeSeoyeon from "@/assets/therapist-lee-seoyeon.png";
import therapistLeeGyuseok from "@/assets/therapist-lee-gyuseok.png";
import therapistChoiJian from "@/assets/therapist-choi-jian.png";

const THERAPIST_LIST = [
  {
    name: "김민준 선생님",
    role: "물리치료사 · 신경계 재활 전문",
    image: therapistKimMinjun,
    tags: ["PNF 기법 인증", "신경계 전문 재활병원 임상 7년"],
    career: [
      "전) 신경계 전문 재활병원 물리치료팀",
      "전) 종합병원 뇌졸중 집중재활센터 근무",
      "현) 온라인 재활 코칭 전담 치료사",
    ],
  },
  {
    name: "이서연 선생님",
    role: "작업치료사 · 일상동작 훈련 전문",
    image: therapistLeeSeoyeon,
    tags: ["보바스(Bobath) 과정 이수", "보호자 교육 다수 진행"],
    career: [
      "전) 대학병원 작업치료팀",
      "전) 지역 재활의학과의원 작업치료팀장",
      "현) 온라인 재활 코칭 전담 치료사",
    ],
  },
  {
    name: "최지안 선생님",
    role: "작업치료사 · 상지 기능 회복 전문",
    image: therapistChoiJian,
    tags: ["연하재활 과정 수료", "가정 방문 재활 경력 다수"],
    career: [
      "전) 대학병원 재활의학과 작업치료팀",
      "전) 방문재활센터 수석 치료사",
      "현) 온라인 재활 코칭 전담 치료사",
    ],
  },
  {
    name: "이규석 선생님",
    role: "물리치료사 · 재활 운동 전문",
    image: therapistLeeGyuseok,
    tags: ["신경계 재활 임상 경력", "맞춤 운동 프로그램 설계"],
    career: [
      "전) 재활전문병원 물리치료팀",
      "전) 재활의학과의원 물리치료실 근무",
      "현) 온라인 재활 코칭 전담 치료사",
    ],
  },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

export default function Therapists() {
  const shuffledTherapists = useMemo(() => shuffle(THERAPIST_LIST), []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link href="/" data-testid="link-back-home">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
              돌아가기
            </span>
          </Link>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            data-testid="text-page-title"
          >
            함께하는 치료사 선생님
          </h1>
          <p className="text-muted-foreground">
            신경계 재활 임상 경험을 보유한 전문 치료사들이 온라인 코칭을
            담당합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {shuffledTherapists.map((therapist, i) => (
            <div
              key={therapist.name}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
              data-testid={`therapist-card-${i}`}
            >
              <div className="w-full aspect-square bg-primary/5">
                <img
                  src={therapist.image}
                  alt={`${therapist.name} 일러스트`}
                  className="w-full h-full object-cover"
                  data-testid={`img-therapist-${i}`}
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <p className="font-bold text-lg text-gray-900">
                    {therapist.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {therapist.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {therapist.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1.5 pt-1">
                  {therapist.career.map((line) => (
                    <li
                      key={line}
                      className="text-sm text-gray-600 flex items-start gap-1.5"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            <Link href="/" data-testid="button-back-to-home">
              <GraduationCap className="w-4 h-4 mr-2" />
              메인으로 돌아가기
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
