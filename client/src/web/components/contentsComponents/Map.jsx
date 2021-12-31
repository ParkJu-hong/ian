import React, { useRef, useEffect } from "react";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  // api rest key 는 어디에서 인증하는걸까..
  center: new window.kakao.maps.LatLng(37.6498864345427, 127.328661960946), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

function Map({ _width = '500px', _heigth = '500px'}) {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <div
      className="map"
      style={{ width: _width, height: _heigth }}
      ref={container}
    ></div>
  );
}

export default Map;
