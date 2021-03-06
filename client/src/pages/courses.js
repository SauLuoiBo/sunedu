import React from "react";
import Head from "next/head";
import PricingWave from "../components/Wave/PricingWave";
import styled from "styled-components";
import { View, Button, Subject, TeacherCard } from "../components";
import { CoursesPlan } from "../containers/CoursesPage";
import { CustomerStories } from "../containers/StoriesPage";
import SwitchButton from "../components/switchButton";
import { useRouter } from "next/router";

const Courses = () => {
  const [subject, setSubject] = React.useState(null);
  const [subjectName, setSubjectName] = React.useState("");
  const [offlineCourses, setOfflineCourses] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    switch (subject) {
      case "TOAN":
        setSubjectName("Môn Toán");
        // code block
        break;
      case "LY":
        // code block
        setSubjectName("Môn Lý");
        break;
      case "ANH":
        // code block
        setSubjectName("Tiếng Anh");
        break;
      case "HOA":
        // code block
        setSubjectName("Môn Hoá");
        break;
      case "VAN":
        // code block
        setSubjectName("Văn học");
        break;
      case "SINH":
        // code block
        setSubjectName("Sinh học");
        break;
      default:
        setSubjectName("");
        break;
      // code block
    }
  }, [subject]);

  const HandleClick = (name) => {
    if (subject === name) {
      setSubject(null);
    } else setSubject(name);
  };

  const ChangeOffline = () => {
    setOfflineCourses(true);
    setTimeout(() => {
      router.push("/offline");
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Khoá học - Sun Education</title>
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
            <div onClick={ChangeOffline}>
              <SwitchButton
                pos={offlineCourses}
                path1="Trực tuyến"
                path2="Trực tiếp"
              />
            </div>
          </View.Child_1>
          <View.Child_2>
            <SubjectWrapper>
              <SubjectNav>
                <Subject onClick={() => HandleClick("TOAN")} />
                <Subject onClick={() => HandleClick("LY")} />
                <Subject onClick={() => HandleClick("HOA")} />
                <Subject onClick={() => HandleClick("ANH")} />
                <Subject onClick={() => HandleClick("VAN")} />
                <Subject onClick={() => HandleClick("SINH")} />
              </SubjectNav>
              <SearchWrapper>
                <Button.Search text={subjectName} />
              </SearchWrapper>
            </SubjectWrapper>
          </View.Child_2>
        </View>
      </Wrapper>

      {/* courses plan online */}

      <Wrapper className="container">
        {subject === "TOAN" ? (
          <CoursesPlan subject="Toán" />
        ) : subject === null ? (
          <CoursesPlan subject="Toán" />
        ) : null}
        {subject === "LY" ? (
          <CoursesPlan subject="Lý" />
        ) : subject === null ? (
          <CoursesPlan subject="Lý" />
        ) : null}
        {subject === "HOA" ? (
          <CoursesPlan subject="Hoá" />
        ) : subject === null ? (
          <CoursesPlan subject="Hoá" />
        ) : null}
        {subject === "ANH" ? (
          <CoursesPlan subject="Tiếng Anh" />
        ) : subject === null ? (
          <CoursesPlan subject="Tiếng Anh" />
        ) : null}
        {subject === "VAN" ? (
          <CoursesPlan subject="Văn Học" />
        ) : subject === null ? (
          <CoursesPlan subject="Văn Học" />
        ) : null}
        {subject === "SINH" ? (
          <CoursesPlan subject="Sinh Học" />
        ) : subject === null ? (
          <CoursesPlan subject="Sinh Học" />
        ) : null}
      </Wrapper>

      {/* stories student */}

      <CustomerStories themeText={true} />

      {/* Teacher infor */}
      <Wrapper className="container">
        <View.Column>
          <View.Child_1>
            <View.Title
              themeText={true}
              textAlign={true}
              title="Chúng tôi"
              des="Gặp đội ngũ giáo viên"
              content="Tất cả giáo viên của chúng tôi đều cố gắng nhất quán với cách giảng dạy từng bước, cung cấp các tệp lý thuyết và bài tập trong các khóa học của chúng tôi."
            />
          </View.Child_1>
          <View.Child_1>
            <View.Row rowGap="3rem" lg={true}>
              <View.Child_1>
                <TeacherCard />
              </View.Child_1>
              <View.Child_1>
                <TeacherCard />
              </View.Child_1>
              <View.Child_1>
                <TeacherCard />
              </View.Child_1>
            </View.Row>
          </View.Child_1>
        </View.Column>
      </Wrapper>
    </>
  );
};

export default Courses;

const Wrapper = styled.section`
  width: 100%;
  display: block;
`;

const SubjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  column-gap: 4rem;
  row-gap: 2rem;
  margin-top: 2rem;
`;

const SubjectNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 1rem;
`;

const SearchWrapper = styled.div`
  max-width: 20rem;
`;
