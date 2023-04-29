import PropTypes from "prop-types";
import { formatDate } from "utils/format-date";
import { Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from "./BlogCard.styled";

export const BlogCard = ({poster, tag, title, description, name, avatar, postedAt}) => {
  return <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
      <Tag>{tag}</Tag>
      <CardTitle>{title}</CardTitle>
    <CardText>{description}</CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={name} />
      <UserInfo>
          <UserName>{name}</UserName>
          <Date>{formatDate(postedAt)}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>;
};

BlogCard.propTypes = {
  poster: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  postedAt: PropTypes.string,
}
