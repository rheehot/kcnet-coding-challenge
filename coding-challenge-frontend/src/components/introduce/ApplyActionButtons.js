import React from 'react';
import styled from 'styled-components';
import palette from 'src/lib/styles/palette';

const ApplyActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.orange[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const ApplyActionButtons = ({ onEdit }) => {
  return (
    <ApplyActionButtonsBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </ApplyActionButtonsBlock>
  );
};

export default ApplyActionButtons;
