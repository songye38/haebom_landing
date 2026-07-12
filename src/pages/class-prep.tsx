import { Clock, ShieldCheck, Users, ArrowRight } from "lucide-react";

const CLASS_SIGNUP_URL =
  "https://e22f823f-6ce6-4ec7-928a-249c39d29133-00-22xqkt9bas4zr.sisko.replit.dev/";

export default function ClassPrep() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-[#1F2937] px-6 py-16">
      <div className="max-w-md mx-auto">
        <h1
          className="text-3xl font-bold leading-snug"
          data-testid="text-greeting"
        >
          안녕하세요, 김OO님 <span aria-hidden="true">👋</span>
        </h1>
        <p className="mt-4 text-lg text-[#6B7280] leading-relaxed">
          오늘도 꾸준한 재활 운동을
          <br />
          시작해볼까요?
        </p>

        <div
          className="mt-8 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6"
          data-testid="card-class-prep"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">첫 수업 준비하기</h2>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FDEDEA] text-[#E05B4C] text-sm font-medium whitespace-nowrap">
              <Clock className="w-4 h-4" />약 3분
            </span>
          </div>
          <p className="mt-4 text-[#6B7280] leading-relaxed">
            환자와 보호자의 상태를 확인하고 가장 적합한 그룹을 추천해드려요.
          </p>
          <a
            href={CLASS_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 w-full h-14 rounded-xl bg-[#E8735B] hover:bg-[#DE6850] text-white text-lg font-semibold shadow-md transition-colors"
            data-testid="button-start"
          >
            시작하기
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div
          className="mt-10 bg-white/70 rounded-2xl p-6 flex items-start gap-4"
          data-testid="card-why-prep"
        >
          <div className="w-12 h-12 rounded-full bg-[#E3EEFB] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />
          </div>
          <div>
            <h3 className="font-bold text-lg">왜 준비가 필요한가?</h3>
            <p className="mt-2 text-[#6B7280] leading-relaxed">
              환자의 현재 상태와 보호자의 경험을 함께 고려해 가장 안전한 그룹을
              추천합니다.
            </p>
          </div>
        </div>

        <div
          className="mt-5 bg-white/70 rounded-2xl p-6 flex items-start gap-4"
          data-testid="card-benefits"
        >
          <div className="w-12 h-12 rounded-full bg-[#E5F5EB] flex items-center justify-center flex-shrink-0">
            <Users className="w-6 h-6 text-[#22A05B]" />
          </div>
          <div>
            <h3 className="font-bold text-lg">온라인 그룹 재활 운동의 장점</h3>
            <ul className="mt-3 space-y-2 text-[#6B7280]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22A05B] flex-shrink-0" />
                기존 방문 재활 운동 대비 약 1/3 비용
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22A05B] flex-shrink-0" />
                보호자도 함께 교육 가능
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
