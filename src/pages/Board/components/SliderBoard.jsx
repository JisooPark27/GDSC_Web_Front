import react from "react";
import styled from "styled-components";
import BottomNavigation from "../../../layout/BottomNavigation";

import pinOn from "../../../assets/icon/pinOn.svg";

const BoardWrapper = styled.div`
	.board-item{
		padding: 4px 6px;
		margin: 4px 0px;
		display: flex;
		
		.icon-img{
			width: 20px;
      height: 20px;
			margin: 0px 5px 0px 0px;
		}
	}
`;

const SliderBoard = () => {
	const pinImg = pinOn;
	const pinBoardList = [
		{
			title: "자유 게시판",
			link: "/board/list/1"
		},
		{
			title: "비밀 게시판",
			link: "/board/list/2"
		},
		{
			title: "졸업생 게시판",
			link: "/board/list/3"
		},
		{
			title: "시사 이슌",
			link: "/board/list/4"
		},
		{
			title: "정보 게시판",
			link: "/board/list/5"
		},
	]
	return (
		<BoardWrapper className="board-wrapper">
			<div>
				{pinBoardList.map((item) => (
					<div className="board-item">
						<img src={pinImg} alt="핀 아이콘" className="icon-img"></img>
						<a className="link-board" href={item.link}>{item.title}</a>
					</div>

				))}
			</div>
		</BoardWrapper>
	)
}

export default SliderBoard;