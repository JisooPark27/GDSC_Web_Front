import react from "react";
import styled from "styled-components";

import likeIcon from "../../../assets/icon/like.png";
import commentIcon from "../../../assets/icon/comment.png";

import { COLORS } from "../../../components/Colors";

const CareerWrapper = styled.div`
  padding: 8px 4px;
  margin: 5px 0px;
  .board-wrapper{
		margin: 0px 0px 20px;
		padding: 6px 0px;
	}
	.title{
    font-size: 16px;
    padding: 5px 8px;
    font-weight: 600;
  }

	.board-item{

		.title{
			font-size: 13px;
			font-weight: 550;
		}

		.upload-date{
			padding: 0px 7px;
    	font-size: 12px;
    	color: ${COLORS.grey_400};
  }
		.status-wrapper{
			margin: -20px 0px 5px 5px;
    	align-items: center;
    	display: flex;
    	float: right;

			.status-like{
      	margin-left: 5px;
      	color: ${COLORS.red};
      	font-size: 14px;
    }

    .status-comments{
      margin-left: 5px;
      color: ${COLORS.green};
      font-size: 14px;
    }

    .status-icon{
      margin-left: 5px;
      width: 8px;
      height: 8px;      
    }
	}
    
}


`;

const SliderCareer = () => {
	const careerItem = [
		{
			title: "인기 게시물1",
			date: "10/11 19:06",
			like: 1,
			comments: 11
		},

	]
	return (
		<CareerWrapper>
			<div className="board-wrapper">
				<div className="title">
					<h2>인기 게시물</h2>
				</div>
				{careerItem.map((item) => (
					<div className="board-item">
						<div className="title">{item.title}</div>
						<div className="upload-date">
							{item.date}
						</div>
						<div className="status-wrapper">
							<img className="status-icon" src={likeIcon} />
							<p className="status-like">{item.like}</p>
							<img className="status-icon" src={commentIcon} />
							<p className="status-comments">{item.comments}</p>
						</div>
					</div>
				))}
			</div>

			<div className="board-wrapper">
				<div className="title">
					<h2>공기업 게시물</h2>
				</div>
				{careerItem.map((item) => (
					<div className="board-item">
						<div className="title">{item.title}</div>
						<div className="upload-date">
							{item.date}
						</div>
						<div className="status-wrapper">
							<img className="status-icon" src={likeIcon} />
							<p className="status-like">{item.like}</p>
							<img className="status-icon" src={commentIcon} />
							<p className="status-comments">{item.comments}</p>
						</div>
					</div>
				))}
			</div>
		</CareerWrapper>

	)


}

export default SliderCareer;