import svgPaths from "./svg-9ny3eksv8p";
import imgImage11 from "figma:asset/c55427eafcb47e7911a3cf87cad1dfac30e77a7a.png";
import imgSlice16 from "figma:asset/1b5a8ea2c73a617f157ecf89bf87b318070ced8f.png";
import imgSlice41 from "figma:asset/a5efc7fd24c4ffa02e8cb653979ea8859fc45da5.png";
import imgSlice51 from "figma:asset/ab49c3a5add69ace7e628e5d3f926ebe8e4400aa.png";
import imgSlice61 from "figma:asset/a0c2ee547f44d5b57554c50fb0e7b908c92be48c.png";
import imgSlice71 from "figma:asset/ec1bef26f84259af23da90726391fa3caa799521.png";
import imgSlice81 from "figma:asset/3f23f87282f0892880eae4979741f5ca882f629f.png";
import imgSlice91 from "figma:asset/512f5fd78d6167aa39c873e8d0c3f9422b1183ee.png";
import imgSlice101 from "figma:asset/57f6b17f2b381e9d055f0095ad9592be0eb43f94.png";
import imgSlice111 from "figma:asset/a0285b48081f506641da4c5fbe56a0fc40e78d97.png";
import imgSlice121 from "figma:asset/386dbce70c8d30db7985259751b115aa825c486a.png";
import imgSlice131 from "figma:asset/7e8ad1ba1dc523debd8abf4513afe58b41e2fc0c.png";
import imgSlice141 from "figma:asset/329f707e04e6e7b925cc3567e51a500da6bce50e.png";
import imgSlice151 from "figma:asset/9c01ddf471e0b07ce93c52425b4d0af8dc337c64.png";
import imgSlice21 from "figma:asset/48ce283c59037b31414b6e79a9b0ff4121642ed6.png";
import imgSlice31 from "figma:asset/a0bd34f69be266f2aace58882921895cc2d47eed.png";

function Logo() {
  return (
    <div className="relative shrink-0 size-[77px]" data-name="Logo">
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
            fill="var(--fill-0, #636AE8)"
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
            fill="var(--fill-0, #636AE8)"
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

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0">
      <Camera />
      <div
        className="font-['Archivo:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#242524] text-[21.884px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[29.179px] whitespace-pre">
          Complete Your Puzzle
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1 />
      <div
        className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8d8b] text-[12.766px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[18.237px]">
          Complete a puzzle of your image!
        </p>
      </div>
    </div>
  );
}

function Puzzle() {
  return (
    <div
      className="bg-[#c5bfbf] box-border grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(4,_minmax(0px,_1fr))] overflow-clip p-0 relative rounded-[11.433px] shrink-0 size-[343px]"
      data-name="Puzzle"
    >
      <div
        className="[grid-area:1_/_2] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 1 6"
        style={{ backgroundImage: `url('${imgSlice16}')` }}
      />
      <div
        className="[grid-area:1_/_3] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 4 1"
        style={{ backgroundImage: `url('${imgSlice41}')` }}
      />
      <div
        className="[grid-area:1_/_4] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 5 1"
        style={{ backgroundImage: `url('${imgSlice51}')` }}
      />
      <div
        className="[grid-area:2_/_1] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 6 1"
        style={{ backgroundImage: `url('${imgSlice61}')` }}
      />
      <div
        className="[grid-area:3_/_1] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 7 1"
        style={{ backgroundImage: `url('${imgSlice71}')` }}
      />
      <div
        className="[grid-area:2_/_2] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 8 1"
        style={{ backgroundImage: `url('${imgSlice81}')` }}
      />
      <div
        className="[grid-area:2_/_3] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 9 1"
        style={{ backgroundImage: `url('${imgSlice91}')` }}
      />
      <div
        className="[grid-area:2_/_4] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 10 1"
        style={{ backgroundImage: `url('${imgSlice101}')` }}
      />
      <div
        className="[grid-area:3_/_4] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 11 1"
        style={{ backgroundImage: `url('${imgSlice111}')` }}
      />
      <div
        className="[grid-area:3_/_3] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 12 1"
        style={{ backgroundImage: `url('${imgSlice121}')` }}
      />
      <div
        className="[grid-area:3_/_2] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 13 1"
        style={{ backgroundImage: `url('${imgSlice131}')` }}
      />
      <div
        className="[grid-area:4_/_1] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 14 1"
        style={{ backgroundImage: `url('${imgSlice141}')` }}
      />
      <div
        className="[grid-area:4_/_2] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 15 1"
        style={{ backgroundImage: `url('${imgSlice151}')` }}
      />
      <div
        className="[grid-area:4_/_3] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 2 1"
        style={{ backgroundImage: `url('${imgSlice21}')` }}
      />
      <div
        className="[grid-area:4_/_4] bg-center bg-cover bg-no-repeat shrink-0 size-[85.75px]"
        data-name="Slice 3 1"
        style={{ backgroundImage: `url('${imgSlice31}')` }}
      />
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative rounded-[7.295px] shrink-0 w-full"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e8618c] border-[1.824px] border-dashed inset-0 pointer-events-none rounded-[7.295px]"
      />
      <Puzzle />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[102px] items-start justify-start p-0 relative shrink-0 w-[343.761px]">
      <Frame2 />
      <Container />
    </div>
  );
}

function Container1() {
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
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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

function Group5() {
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

function Group6() {
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

function Group7() {
  return (
    <div
      className="absolute bottom-[8.25%] contents left-[8.13%] right-[8.13%] top-[8.19%]"
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
      className="absolute bottom-[8.25%] contents left-[8.13%] right-[8.13%] top-[8.19%]"
      data-name="Group"
    >
      <Group7 />
    </div>
  );
}

function Upload() {
  return (
    <div
      className="absolute overflow-clip size-[14.589px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Upload"
      style={{ left: "calc(50% - 44.68px)" }}
    >
      <Group8 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#636ae8] h-[36.473px] relative rounded-[18.237px] shrink-0 w-[161.836px]"
      data-name="Button"
    >
      <div className="h-[36.473px] overflow-clip relative w-[161.836px]">
        <div
          className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12.766px] text-left text-nowrap"
          style={{ top: "calc(50% - 10.03px)", left: "calc(50% - 30.091px)" }}
        >
          <p className="block leading-[20.06px] whitespace-pre">Upload Photo</p>
        </div>
        <Upload />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-0 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[18.237px]"
      />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-8 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Logo />
      <Container1 />
      <Button />
    </div>
  );
}

export default function IPhone162() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-3 relative size-full"
      data-name="iPhone 16 - 2"
    >
      <Frame4 />
    </div>
  );
}