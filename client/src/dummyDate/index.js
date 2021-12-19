const url = 'http://ian.e-web.kr/data/file/gallery/32450274_ni6m8IPr_KakaoTalk_20211104_112543219.jpg';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();

const resultBirth = `${year}년 ${month}월 ${day}일`;

const result = {
    pictures: [
        {id: 1, title: 'title', comments: '', src: url},
        {id: 2, title: 'title', comments: '', src: url},
        {id: 3, title: 'title', comments: '', src: url},
        {id: 4, title: 'title', comments: '', src: url},
        {id: 5, title: 'title', comments: '', src: url},
        {id: 6, title: 'title', comments: '', src: url},
        {id: 7, title: 'title', comments: '', src: url},
        {id: 8, title: 'title', comments: '', src: url},
        {id: 9, title: 'title', comments: '', src: url},
        {id: 10, title: 'title', comments: '', src: url},
        {id: 11, title: 'title', comments: '', src: url},
        {id: 12, title: 'title', comments: '', src: url},
        {id: 13, title: 'title', comments: '', src: url},
        {id: 14, title: 'title', comments: '', src: url},
        {id: 15, title: 'title', comments: '', src: url},
        {id: 16, title: 'title', comments: '', src: url}
    ],
    notices: [
        {id: 1, title: '폐기물처리 비용 공지', comments: '폐기물처리 비용 공지', birth: resultBirth},
        {id: 2, title: '임시휴무일 공지', comments: '임시휴무일 공지', birth: resultBirth},
        {id: 3, title: '이안환경 연락 공지', comments: '이안환경 연락 공지', birth: resultBirth},
        {id: 4, title: '사이트 접속에러 공지', comments: '사이트 접속에러 공지', birth: resultBirth},
    ]
    // 문의사항은 https://jsonplaceholder.typicode.com/posts 여기다가 get 요청보내서 json받아온 걸로 더미데이터 사용해서
    // 사용할 것
}


export default result;