import React from "react";
import styled from "styled-components";
import { Plan, View } from "../../components";
import { QuestCard } from "../../components/Test";
import PricingWave from "../../components/Wave/PricingWave";
import { Text } from "../../styles";
import Head from "next/head";

import JsxParser from "react-jsx-parser";
import {
  Equation,
  EquationEvaluate,
  EquationOptions,
  defaultErrorHandler,
} from "react-equation";

const Test = [
  { number: "1", answer: "A" },
  { number: "2", answer: "" },
  { number: "3", answer: "A" },
  { number: "4", answer: "A" },
  { number: "5", answer: "A" },
  { number: "6", answer: "A" },
  { number: "7", answer: "A" },
];

const text =
  '<Equation value="5m + 1/2m * sin(π) + (22 m^2)+ (ln_2(9))^2 / (2m)" /> dsfdfd';
const Work = () => {
  const [choose, setChoose] = React.useState(1);

  const PreAnswer = () => {
    if (choose > 49) return true;
    setChoose(choose + 1);
  };
  const RevAnswer = () => {
    if (choose < 2) return true;
    setChoose(choose - 1);
  };

  return (
    <>
      <Head>
        <title>Bài tập- Sun Education</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PricingWave />
      <section className="container">
        <View>
          <View.Child_1>
            <Plan title="Danh sách câu hỏi" widthCard="100px">
              {Test.map((item, index) => {
                return (
                  <QuestCard
                    key={index}
                    number={index + 1}
                    current={choose}
                    answer={item.answer}
                    onClick={() => setChoose(index + 1)}
                  />
                );
              })}
            </Plan>
          </View.Child_1>
          <View.Child_2>
            <AnswerPlan>
              <div className="header-title ">
                <div onClick={() => RevAnswer()}>
                  {" "}
                  <Text.BodyIntro>Câu trước</Text.BodyIntro>{" "}
                </div>

                <Text.BodyIntro>Câu {choose}</Text.BodyIntro>
                <div onClick={() => PreAnswer()}>
                  {" "}
                  <Text.BodyIntro>Câu tiếp</Text.BodyIntro>{" "}
                </div>
              </div>
              <div className="saparetor" />

              {/* <div>
                <Text>
                  <JsxParser components={{ Equation }} jsx={text} />
                  <JsxParser components={{ Equation }} jsx={text} />
                  <JsxParser components={{ Equation }} jsx={text} />
                </Text>
              </div> */}

              <PlanWrapper>
                <iframe
                  src="https://onedrive.live.com/embed?resid=C003F6CBB5B188F1%21542689&amp;authkey=%21AByHbCr3OHtZwnc&amp;em=2&amp;wdEmbedCode=0&amp;wdPrint=0"
                  width="100%"
                  height="288px"
                  frameborder="0"
                >
                  Đây là tài liệu{" "}
                  <a target="_blank" href="https://office.com">
                    Microsoft Office
                  </a>{" "}
                  được nhúng, hoạt động trên nền tảng{" "}
                  <a target="_blank" href="https://office.com/webapps">
                    Office
                  </a>
                  .
                </iframe>
              </PlanWrapper>
              <div className="saparetor" />
              <Text.BodyIntro>Trả lời</Text.BodyIntro>
            </AnswerPlan>
          </View.Child_2>
        </View>
      </section>
    </>
  );
};

export default Work;

const AnswerPlan = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  margin: 0 auto;
  backdrop-filter: blur(40px) saturate(120%) brightness(120%);
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px) saturate(120%) brightness(100%);
  -webkit-mask-box-image: linear-gradient(
    rgb(255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  .header-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
  }
  .saparetor {
    width: 100%;
    height: 2px;
    background-color: blue;
  }
`;

const PlanWrapper = styled.div`
  --width-min: ${(props) => props.widthCard || "280px"};
  margin: 20px 0;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--width-min), 1fr));
  /* overflow-y: auto; */
  /* padding: 20px;
  margin: 0 auto; */
  /* backdrop-filter: blur(40px) saturate(120%) brightness(120%);
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px) saturate(120%) brightness(100%); */
  justify-items: center;

  /* -webkit-mask-box-image: linear-gradient(
    rgb(255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  ); */
  /* ::-webkit-scrollbar {
    display: none;
  }
  max-height: 34rem; */
`;
