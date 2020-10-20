import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeatmapGrid from './HeatmapGrid';
import HeatmapHoursHeader from './HeatmapHoursHeader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const Table = styled.table`
  border-spacing: 0;
  cell-collapse: 0;
`;

const TimezoneWrapper = styled.div`
  margin-top: 12px;
  font-size: ${({ theme }) => theme.font.size.small};
`;

const Timezone = styled.span`
  font-weight: bold;
`;

const Heatmap = ({ posts }) => (
  <Wrapper>
    <Table>
      <HeatmapHoursHeader />
      <tbody>
        <HeatmapGrid posts={posts} />
      </tbody>
    </Table>
    <TimezoneWrapper>
      All times are shown in your timezone:
      {' '}
      <Timezone>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Timezone>
    </TimezoneWrapper>
  </Wrapper>
);

Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Heatmap;
