import React, {useState} from 'react';
import './Poll.css';

function Poll({ initialData }) {
  const [pollData, setPollData] = useState(initialData);
  const [hasVoted, setHasVoted] = useState(false); // Should be false
  const [selectedOption, setSelectedOption] = useState(null);

  // Calculate total votes (contains a bug)
  const totalVotes = pollData.options.reduce((sum, option) => {
    return sum , option.votes
  }, 0);

  const handleVote = () => {
    setPollData(prev=>({...prev,options:prev.options.map(item=>item.id === selectedOption ? {...item,votes:item.votes + 1} : item)}))
    
    setHasVoted(prev=>!prev); // Incorrect logic
  };
  
  const handleSelectOption = (optionId) => {
    // Logic for selecting an option is missing
    setSelectedOption(optionId)
  };

  return (
    <div className="poll-container">
      <h3>{pollData.question}</h3>
      <div className="options-container">
        {pollData.options.map(option => {
          const percentage =  totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
          
          return (
            <div
              key={option.id}
              className={`option-wrapper ${selectedOption == option.id ? 'selected' : ''}`}
              onClick={() => handleSelectOption(option.id)}
            >
              <div className="option-text">{option.text}</div>
              {hasVoted && (
                <div className="result-bar">
                  <div className="result-fill" style={{ width: `100%` }}></div> {/* Hardcoded width */}
                  <span className="percentage">{percentage.toFixed(1)}%</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button
        className="vote-btn"
        onClick={handleVote}
        disabled={hasVoted || !selectedOption}
      >
        Vote
      </button>
    </div>
  );
}

export default Poll;