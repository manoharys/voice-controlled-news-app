import React from 'react'

const NewsCard = ({article}) => {
    return (
        <div>
            {article.author} = {article.title}
        </div>
    )
}

export default NewsCard
