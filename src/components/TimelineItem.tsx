import * as React from 'react'

import '../less/common.less';
import '../less/content.less';

// import util from '../lib/util';

interface ItemProps {
    title: string,
    objectId: number,
    createdAt: string,
    collectionCount: number,
    commentsCount: number,
    tags: [{
        title: string
    }],
    user: {
        username: string
    },
}

export default class TimelineItem extends React.Component<ItemProps,{}> {

    render() {
        const { ...item } = this.props;

        return (
            <li key={item.objectId}>
                <div className="meta-row">
                    <ul>
                        <li>{item.user.username}</li>
                        {/* <li>{util.timeLeaveNow((new Date(item.createdAt)).getTime())}前</li> */}
                        <li>
                            {
                                item.tags.map((tag,index) => {
                                    return index > 0 ? '/'+tag.title : tag.title
                                })
                            }
                        </li>
                    </ul>
                </div>

                <div className="title-row">
                    {item.title}
                </div>
                <div className="action-row">
                    <ul>
                        <li className="collection">
                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" />
                            <span>{item.collectionCount}</span>
                        </li>
                    </ul>
                </div>
            </li>
        )
    }
}