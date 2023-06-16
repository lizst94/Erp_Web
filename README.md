# **ERP 프로그래밍**

## **📗 목차**

<b>
  
- 📝 [개요](#-포트폴리오-개요)
- 🛠 [기술 및 도구](#-기술-및-도구)
- 👨🏻‍💻 [기능 구현](#-기능-구현)
  - [거래목록표](#1-거래목록표)
  - [엑셀Export](#2-엑셀-export)
  - [chart JS](#3-거래처별-차트)
  
</b>

## **📝 포트폴리오 개요**

<img width="100%" alt="메인 페이지" src="https://github.com/lizst94/lizst94.github.io/assets/134988273/b2383bba-a71e-42f8-b71f-b1a4f2b40c50" />

> **프로젝트:** 웹 기반 ERP 프로그래밍
>
> **인력구성:** 팀원 6명
>
> **분류:** 팀 프로젝트
>
> **제작 기간:** 2023. 05 ~ 2023. 06 (2개월)
>
> **주요 업무 및 상세 역할:** 
> - 프로젝트 기획 및 기초적인 모듈  엔터티 구축
> - 모듈간 매핑 로직구현
> - Datatables를 이용한 표와 거래처 연도 및 분기별 chart Js 구현
>
> **사용 기술:** Java, Sprig Boots, My Sql, Javascript

<br />

## **🛠 기술 및 도구**

<!-- <img alt="이미지 이름" src ="https://img.shields.io/badge/이미지 이름-색상 코드.svg?&style=for-the-badge&logo=이미지 이름&logoColor=로고 색상"/> -->
<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="spring" src ="https://img.shields.io/badge/spring-6DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white"/> <img alt="bootstrap" src ="https://img.shields.io/badge/bootstrap-7952B3.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> 

<br />

## **🛠 사용 튤**
<br />

<img alt="intellijidea" src ="https://img.shields.io/badge/intellijidea-000000.svg?&style=for-the-badge&logo=intellijidea&logoColor=white"/> <img alt="mysql" src ="https://img.shields.io/badge/mysql-4479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>

<br />

## **👨🏻‍💻 기능 구현**

### **1. 거래목록표**

<img width="100%"  height="60%" alt="dataTable" src="https://github.com/lizst94/lizst94.github.io/assets/134988273/218783e6-c1d8-4499-81a9-64321cab54e3" />

<br />

- 입고, 출고 등록시 거래목록표에 관련된 데이터를 수집하여 거래처 엔터티에 가공 및 저장, 이를 통해 거래처별로 종합적인 정보를 생성하고 활용, 실시간 데이터 확인 가능
- DataTables(servaer Side)를 이용한 대용량 처리 표 생성(검색,페이징,정렬기능구현) 
- table foot에 검색된 거래처별 거래금액 총합 로직 구현
<br />

### **2. 엑셀 export**

<img width="100%"  height="60%" alt="csv" src="https://github.com/lizst94/lizst94.github.io/assets/134988273/d8361421-145b-4db4-aa61-fc73a05d1883" />

<br />
- datatable안에 있는 플러그인 활용
- 필요한 거래처 정보만 검색해 excel 파일로 출력가능한 버튼 구현

<br />

### **3. 거래처별 차트**

<img width="100%" height="60%" alt="hashlink" src="https://github.com/lizst94/lizst94.github.io/assets/134988273/41d9877d-45a5-48ea-b1a6-1ea5b2749f26" />

<br />

- chart JS사용, PopUp 창안에 select box를 이용해 거래분류별, 거래처별, 연도를 클라이언트에게 받고
- ajax를 이용해 조건에 맞는 데이터의 연도별 거래금액, 분기별 거래금액을 chart로 표현
- 등록된 데이터의 입고, 출고별 거래량 Top5

<br />


