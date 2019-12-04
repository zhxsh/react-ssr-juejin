/*
 * @Author: zhang.xiaosheng
 * @Date: 2019-01-30 16:56:24
 * @Last Modified by: zhang.xiaosheng
 * @Last Modified time: 2019-03-28 16:02:01
 */
import * as React from 'react';

import '../../less/common.less';
import '../../less/content.less';
// import util from '../lib/util.ts';

import TimelineItem from './TimelineItem';

export default class Header extends React.Component {
  render() {
    // console.log("zxs c", JSON.stringify(this.props));
    const { articleList } = this.props;
    return (
      <div className="content">
        <ul>
          {articleList &&
            articleList.entrylist &&
            articleList.entrylist.map((item) => {
              return (
                <TimelineItem key={item.objectId} {...item} />
                // <li key={item.objectId}>
                //     <div className="meta-row">
                //         <ul>
                //             <li>{item.user.username}</li>
                //             <li>{util.timeLeaveNow((new Date(item.createdAt)).getTime())}前</li>
                //             <li>
                //                 {
                //                     item.tags.map((tag,index) => {
                //                         return index > 0 ? '/'+tag.title : tag.title
                //                     })
                //                 }
                //             </li>
                //         </ul>
                //     </div>

                //     <div className="title-row">
                //         {item.title}
                //     </div>

                // </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
