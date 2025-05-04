import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopics, toggleProblem } from '../features/topics/topicSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.topics);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  return (
    <div>
      <h2>DSA Topics</h2>
      {list.map((topic) => (
        <div key={topic._id}>
          <h3>{topic.title}</h3>
          <ul>
            {topic.problems.map((p, idx) => (
              <li key={idx}>
                <input
                  type="checkbox"
                  checked={p.done}
                  onChange={() => dispatch(toggleProblem({ topicId: topic._id, index: idx }))}
                />
                {p.title} - {p.level}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
