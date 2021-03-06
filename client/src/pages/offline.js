import React from "react";
import Head from "next/head";
import styled from "styled-components";
import PricingWave from "../components/Wave/PricingWave";
import { View } from "../components";
import SwitchButton from "../components/switchButton";
import { useRouter } from "next/router";
import { CoursesPlan } from "../containers/CoursesPage";

const OfflinePage = () => {
  const router = useRouter();
  const [onlineCourses, setOnlineCourses] = React.useState(false);

  const ChangeOnline = () => {
    setOnlineCourses(true);
    setTimeout(() => {
      router.push("/courses");
    }, 500);
  };
  return (
    <>
      <Head>
        <title>Khoa hoc offline - Sun Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PricingWave />
      <Wrapper className="container">
        <View align="flex-end">
          <View.Child_1>
            <View.Title
              title="Hơn 120 giờ học"
              des="Học các khoá học và làm bài tập tốt nhất"
              content="Chúng tôi tập trung vào các kiến thức hàng đầu để các em học sinh có thể chuẩn bị tốt kiến thức phổ thông của mình. Sau đó, chúng tôi dạy tất cả các kỹ năng làm bài thi để các em đạt kết quả tốt nhất."
            />
            <div onClick={ChangeOnline}>
              <SwitchButton
                pos={!onlineCourses}
                path1="Trực tuyến"
                path2="Trực tiếp"
              />
            </div>
          </View.Child_1>
          <View.Child_2>asddsa</View.Child_2>
        </View>
      </Wrapper>
      {/* courses plan offline */}
      <Wrapper className="container">
        <CoursesPlan.Offline />
      </Wrapper>
    </>
  );
};

export default OfflinePage;

const Wrapper = styled.section`
  width: 100%;
  display: block;
`;
