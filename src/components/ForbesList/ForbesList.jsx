import { ForbesListItem } from 'components';
import PropTypes from "prop-types";
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ( {list} ) => {
  return (<LeaderBoard>
    <BoardHeader>
      <BoardTitle>
        <TitleTop>Forbes</TitleTop>
        <TitleBottom>Leader board</TitleBottom>
      </BoardTitle>
    </BoardHeader>
  
    <LeaderBoardProfiles>
{list.map(item => (
  <ForbesListItem key={item.id} avatar={item.avatar} name={item.name} capital={item.capital} isIncrease={item.isIncrease} />
))}
    </LeaderBoardProfiles>
  </LeaderBoard>);
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isIncrease: PropTypes.bool.isRequired
    }).isRequired,
  ).isRequired,
}