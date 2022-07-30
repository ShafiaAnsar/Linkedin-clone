import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widget.css'
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
      {newsArticle('PAPA React is back' , 'Top news -9999 readers')}
    {newsArticle ('Corono Virus','Top news -884 readers')}
    {newsArticle ('Tesla hits new height','Cars & auto -84 readers')}
    {newsArticle ('Bitcoin Breaks $33K','Top news -484 readers')}
    {newsArticle ('Is Redux to good','Top news -754 readers')}
    </div>
  )
}

export default Widgets