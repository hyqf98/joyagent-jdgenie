/**
 * 预览状态的tab选项
 */
import csvIcon from "@/assets/icon/CSV.png";
import htmlIcon from "@/assets/icon/HTML.png";
import demo4 from "@/assets/icon/demo4.png";
import docxIcon from "@/assets/icon/docx.png";
import excleIcon from "@/assets/icon/excle.png";
import pdfIcon from "@/assets/icon/pdf.png";
import txtIcon from "@/assets/icon/txt.png";

import { ActionViewItemEnum } from "./enums";

export const iconType: Record<string, string> = {
  doc: docxIcon,
  docx: docxIcon,
  xlsx: excleIcon,
  csv: csvIcon,
  pdf: pdfIcon,
  txt: txtIcon,
  html: htmlIcon,
};

export const actionViewOptions = [
  {
    label: "实时跟随",
    value: ActionViewItemEnum.follow,
    split: false,
  },
  {
    label: "浏览器",
    value: ActionViewItemEnum.browser,
  },
  {
    label: "文件",
    value: ActionViewItemEnum.file,
  },
];

export const defaultActiveActionView = actionViewOptions[0].value;

export const chatQustions = [];

export const productList = [
  // {
  //   name: "智能问数",
  //   img: "icon-xinjianduihua",
  //   type: "dataAgent",
  //   placeholder: "AI会完成你的数据分析任务",
  //   color: "text-[#4040FF]",
  // },
  {
    name: "网页模式",
    img: "icon-diannao",
    type: "html",
    placeholder: "AI会完成你的任务并以HTML网页方式输出报告",
    color: "text-[#29CC29]",
  },
  {
    name: "文档模式",
    img: "icon-wendang",
    type: "docs",
    placeholder: "AI会完成你的任务并以markdown格式输出文档",
    color: "text-[#4040FF]",
  },
  {
    name: "PPT模式",
    img: "icon-ppt",
    type: "ppt",
    placeholder: "AI会完成你的任务并以PPT方式输出结论",
    color: "text-[#FF860D]",
  },
  {
    name: "表格模式",
    img: "icon-biaoge",
    type: "table",
    placeholder: "AI会完成你的任务并以表格格式输出结论",
    color: "text-[#FF3333]",
  },
];

export const defaultProduct = productList[0];

export const RESULT_TYPES = ["task_summary", "result"];

export const InputSize: Record<string, string> = {
  big: "106",
  medium: "72",
  small: "32",
};

export const demoList = [
  {
    title: "虫情数据分析",
    description: "帮我分析一下12月虫情工单数据",
    tag: "数据分析",
    videoUrl:
      "https://private-user-images.githubusercontent.com/49786633/469171151-657bbe61-5516-4ab9-84c2-c6ca75cc4a6f.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM2OTE5ODgsIm5iZiI6MTc1MzY5MTY4OCwicGF0aCI6Ii80OTc4NjYzMy80NjkxNzExNTEtNjU3YmJlNjEtNTUxNi00YWI5LTg0YzItYzZjYTc1Y2M0YTZmLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI4VDA4MzQ0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJkMDNlNTkxNzFkNjFlYTI1MTAzNTIyZWM0YzA1MzE5MTY4NDYyYTg5MjUxZWY0Mjg0OWU1ODUxNGZkNTU3ZTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.BRatyWFZm91TAvRn1iss7DMPWLXIoRm9geqaN6af7cI",
    url: "//storage.360buyimg.com/pubfree-bucket/ei-data-resource/89ab083/static/demoPage4.html",
    image: demo4,
  },
];
