import React, { useState, useEffect } from 'react';
import { useParams, withRouter, useHistory } from 'react-router-dom';
import SubredditForm from '../components/SubredditForm';
import Spinner from '../components/Spinner';
import Heatmap from '../components/Heatmap';
import PostTable from '../components/PostTable';
import useFetchPosts from '../hooks/useFetchPosts';


const Search = () => {
  const { subreddit: subredditQuery } = useParams();
  const history = useHistory();
  const [subreddit, setSubreddit] = useState(subredditQuery);
  const [posts, loading, hasError] = useFetchPosts(subredditQuery);

  const handleSubmit = (evt) => {
    history.push(`/search/${subreddit}`);
    evt.preventDefault();
  };

  const handleChange = (evt) => setSubreddit(evt.target.value);

  useEffect(() => {
    setSubreddit(subredditQuery);
  }, [subredditQuery]);

  const HeatmapAndTable = () => {
    if (hasError) {
      return <div>Error loading data</div>;
    }
    return (
      <>
        <Heatmap posts={posts} />
        <PostTable posts={posts} />
      </>
    );
  };

  return (
    <main>
      <SubredditForm
        subreddit={subreddit}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {loading ? <Spinner /> : <HeatmapAndTable />}
    </main>
  );
};

export default withRouter(Search);
