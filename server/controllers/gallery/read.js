const { gallery: Gallery } = require('../../models');

module.exports = async (req, res) => {
    // 한번 내보낼때 최대 16개 게시물 내보내야함.
    // 그리고 16개당 페이지카운트가 1개이고 페이지 카운트도 몇개인지 응답해줘야함
    // 그리고 검색기능을 위해 req.body.search 에 무언가 있으면 where로 찾아주자..

    let pageNum = 2; // 요청 페이지 넘버
    let offset = 0;

    if (pageNum > 1) {
        offset = 3 * (pageNum - 1); // 나중에는 offset = 16 * (pageNum - 1); 이렇게 바꾸면 됌
    }

    Gallery
        .findAndCountAll({
            offset: offset,
            limit: 3    // 나중에는 16개로 바꾸면 됌
        })
        .then((result) => {
            res.json(result.rows);
            return;
        })

        // 생활코딩 aws sdk 공부중.. sdk공부하면 연결해서 응답하면 될 듯
        // sdk s3, ec2, rds 
        // 
}
