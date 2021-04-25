import React from 'react'

import "../static/sass/components/loading.scss";

const Loading = () => {
    return (
        <section className="loading">
            <div className="lds-ripple"><div></div><div></div></div>
        </section>
    )
}

export default Loading
