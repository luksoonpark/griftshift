import svgPaths from "./svg-udrup5gasb";
import imgImage11 from "figma:asset/c55427eafcb47e7911a3cf87cad1dfac30e77a7a.png";
import imgImage from "figma:asset/46a41810e1a3c8cae1c375804c85a98b3c5166e8.png";
import imgImage1 from "figma:asset/4bc6456e82604485e611f9bc47594d6bc3d57a56.png";
import imgImage2 from "figma:asset/021daa6e109980724d6b099a645dd2ac5bd9bbc4.png";
import imgImage3 from "figma:asset/a1450f19020b63ad93583c9a1ea5048ad672013f.png";
import imgImage4 from "figma:asset/4221357f6fed182e7aebee45f63747799d3c02e3.png";
import imgImage5 from "figma:asset/7858ec86ee79c1d7d58f73a1940e96f4e302e573.png";

function Logo() {
  return (
    <div className="relative shrink-0 size-[135px]" data-name="Logo">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0"
        data-name="image (1) 1"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[12.5%] left-[4.17%] right-[4.17%] top-[12.5%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 17"
      >
        <g id="Group">
          <path
            d={svgPaths.p19483c00}
            fill="var(--fill-0, #0906A5)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute bottom-[29.17%] left-[33.33%] right-[33.33%] top-[37.5%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Group">
          <path
            d={svgPaths.p35ae9700}
            fill="var(--fill-0, #0906A5)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[12.5%] contents left-[4.17%] right-[4.17%] top-[12.5%]"
      data-name="Group"
    >
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-[12.5%] contents left-[4.17%] right-[4.17%] top-[12.5%]"
      data-name="Group"
    >
      <Group2 />
    </div>
  );
}

function Camera() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[21.884px]"
      data-name="camera"
    >
      <Group3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0">
      <Camera />
      <div
        className="font-['Archivo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#242524] text-[21.884px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[29.179px] whitespace-pre">
          Create Your Puzzle
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame7 />
      <div
        className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8d8b] text-[12.766px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[18.237px]">
          Upload a photo or capture a new one to turn into a puzzle!
        </p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute bottom-[8.3%] left-[8.25%] right-[8.25%] top-[58.3%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31 13"
      >
        <g id="Group">
          <path
            d={svgPaths.p881f7b1}
            fill="var(--fill-0, #F709FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute bottom-[62.46%] left-[24.95%] right-[24.95%] top-[8.31%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19 11"
      >
        <g id="Group">
          <path
            d={svgPaths.p394bbe00}
            fill="var(--fill-0, #F709FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute bottom-[33.27%] left-[45.83%] right-[45.83%] top-[8.28%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 4 22"
      >
        <g id="Group">
          <path
            d={svgPaths.p13fc7500}
            fill="var(--fill-0, #F709FF)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div
      className="absolute bottom-[8.3%] contents left-[8.25%] right-[8.25%] top-[8.28%]"
      data-name="Group"
    >
      <Group4 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div
      className="absolute bottom-[8.3%] contents left-[8.25%] right-[8.25%] top-[8.28%]"
      data-name="Group"
    >
      <Group7 />
    </div>
  );
}

function Upload() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[36.473px]"
      data-name="upload"
    >
      <Group8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start p-0 relative shrink-0 w-full">
      <Upload />
      <div
        className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8d8b] text-[16.413px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[25.531px]">{`Drag & Drop Image or Click to Upload`}</p>
      </div>
      <div
        className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8d8b] text-[12.766px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[18.237px]">
          Recommended: 600x600 pixels for best results.
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] relative rounded-[7.295px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f709ff] border-[1.824px] border-dashed inset-0 pointer-events-none rounded-[7.295px]"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[26px] py-[85px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div
      className="absolute bottom-[8.25%] left-[8.13%] right-[8.13%] top-[58.25%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13 5"
      >
        <g id="Group">
          <path
            d={svgPaths.p21b83700}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div
      className="absolute bottom-[62.41%] left-[24.87%] right-[24.88%] top-[8.28%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 5"
      >
        <g id="Group">
          <path
            d={svgPaths.p330a0f80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div
      className="absolute bottom-[33.19%] left-[45.81%] right-[45.81%] top-[8.19%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 2 9"
      >
        <g id="Group">
          <path
            d={svgPaths.p3b9a2fc0}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div
      className="absolute bottom-[8.25%] contents left-[8.13%] right-[8.13%] top-[8.19%]"
      data-name="Group"
    >
      <Group9 />
      <Group10 />
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div
      className="absolute bottom-[8.25%] contents left-[8.13%] right-[8.13%] top-[8.19%]"
      data-name="Group"
    >
      <Group12 />
    </div>
  );
}

function Upload1() {
  return (
    <div
      className="absolute overflow-clip size-[14.589px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Upload"
      style={{ left: "calc(50% - 44.68px)" }}
    >
      <Group13 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#0906a5] h-[36.473px] relative rounded-[18.237px] shrink-0 w-[161.836px]"
      data-name="Button"
    >
      <div className="h-[36.473px] overflow-clip relative w-[161.836px]">
        <div
          className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12.766px] text-left text-nowrap"
          style={{ top: "calc(50% - 10.03px)", left: "calc(50% - 30.091px)" }}
        >
          <p className="block leading-[20.06px] whitespace-pre">Upload Photo</p>
        </div>
        <Upload1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.237px]"
      />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-0 rounded-[7.295px] size-[87.536px] top-[15.5px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-[87.536px]">
        <div
          className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute border-0 border-[#ffffff] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[98.48px] rounded-[7.295px] size-[87.536px] top-[15.5px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-[87.536px]">
        <div
          className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage1}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute border-0 border-[#ffffff] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[196.96px] rounded-[7.295px] size-[87.536px] top-[15.5px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-[87.536px]">
        <div
          className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage2}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute border-0 border-[#ffffff] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[295.43px] rounded-[7.295px] size-[87.536px] top-[15.5px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-[87.536px]">
        <div
          className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage3}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute border-0 border-[#ffffff] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[393.91px] rounded-[7.295px] size-[87.536px] top-[15.5px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-[87.536px]">
        <div
          className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage4}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute border-0 border-[#ffffff] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] left-[492.39px] rounded-[7.295px] size-[87.536px] top-[15.5px]"
      data-name="Container"
    >
      <div className="overflow-clip relative size-[87.536px]">
        <div
          className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left left-[0.91px] size-[85.712px] top-[0.91px]"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage5}')` }}
        >
          <div
            aria-hidden="true"
            className="absolute border-0 border-[#ffffff] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[7.295px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] h-[110.332px] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="h-[110.332px] overflow-clip relative w-full">
        <div
          className="absolute h-0 left-0 top-0 w-[343.761px]"
          data-name="Line"
        >
          <div className="absolute bottom-[-0.46px] left-0 right-0 top-[-0.46px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 344 2"
            >
              <path
                d="M0 1H343.761"
                id="Line"
                stroke="var(--stroke-0, #EBEBEA)"
                strokeWidth="0.911833"
              />
            </svg>
          </div>
        </div>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[#ebebea] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[21px] items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-['Archivo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#242524] text-[16.413px] text-left w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[25.531px]">Recent Puzzles</p>
      </div>
      <Container7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-[343.761px]">
      <Frame8 />
      <Container />
      <Button />
      <Frame5 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[10.942px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ebebea] border-[0.912px] border-solid inset-0 pointer-events-none rounded-[10.942px] shadow-[0px_0px_1.824px_0px_rgba(23,26,31,0.12),0px_0px_0.912px_0px_rgba(23,26,31,0.07)]"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[23px] py-6 relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start p-0 relative shrink-0 w-[389.761px]">
      <Logo />
      <Container8 />
    </div>
  );
}

export default function IPhone161() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-3 relative size-full"
      data-name="iPhone 16 - 1"
    >
      <Frame10 />
    </div>
  );
}