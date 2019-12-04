import * as React from 'react';
import api from '../../Api/api';
import axios from 'axios';
import '../../less/common.less';
import '../../less/content.less';

// import util from '../lib/util';

// interface ItemProps {
//     title: string,
//     objectId: number,
//     createdAt: string,
//     collectionCount: number,
//     commentsCount: number,
//     tags: [{
//         title: string
//     }],
//     user: {
//         username: string
//     },
// }

// export default class TimelineItem extends React.Component<ItemProps,{}> {
export default class TimelineItem extends React.Component {
  toDetail = () => {
    console.log(api.getDetail);
    const { objectId, originalUrl } = this.props;
    const postId = originalUrl.substring(originalUrl.lastIndexOf('/') + 1);
    axios
      .get(api.getDetail, {
        params: {
          src: 'web',
          postId,
          type: 'entryView',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { ...item } = this.props;

    return (
      <li key={item.objectId} onClick={this.toDetail}>
        <div className="meta-row">
          <ul>
            <li>{item.user.username}</li>
            {/* <li>{util.timeLeaveNow((new Date(item.createdAt)).getTime())}前</li> */}
            <li>
              {item.tags.map((tag, index) => {
                return index > 0 ? '/' + tag.title : tag.title;
              })}
            </li>
          </ul>
        </div>

        <div className="title-row">{item.title}</div>
        <div className="action-row">
          <ul>
            <li className="collection">
              <img src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" />
              <span>{item.collectionCount}</span>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}
