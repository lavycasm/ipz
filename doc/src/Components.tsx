import * as React from 'react';
import './ipz.css';

import {  CopyBlock, rainbow } from 'react-code-blocks';
import * as ReactRouter from 'react-router-dom' ;

function Bullet() {
  return <span className="Bullet">&#9679;</span>;
}

export function BulletParagraph(props: { children: React.ReactNode }) {

  var childrenLength = React.Children.count(props.children);
  console.log(childrenLength);

  var paragraphs = React.Children.map(props.children, (child, _) => {
    return (
    <Paragraph>
        <Bullet />
        {child}
    </Paragraph>
    );
  });

  return (<>{paragraphs}</>);
}


export function Code(props: any) {

  // const raw = String(props.children);
  // const text = code.replace(/\\\s*/g, '\n'); // replace all backslashes (and following whitespace/newline) with a newline
  const block = {
    text: props.children,
    language: props.lang,
    showLineNumbers: true,
    startingLineNumber: 0,
    theme: rainbow
  }
  return (
    <div className='Code'>
    <CopyBlock {...block}/>
    </div>
    );
}

export function Link(props: any) {
  return (
    <ReactRouter.Link to={props.path} className='Link'>
        {props.text}
    </ReactRouter.Link>
  )
}

var currentlyEnlargedImage: string | null = null;

function ensmallImage() {
    if (currentlyEnlargedImage != null){
        var image = document.getElementById(currentlyEnlargedImage)?.classList;
        var overlay = document.getElementById('overlay')?.classList;
        if (image?.contains("ImageEnlarged") ){
        overlay?.remove("Overlay")
        image?.remove("ImageEnlarged")
        } 
    }   
}

export function Overlay() {
  return (
    <div id="overlay" onClick={ensmallImage}></div>
  );
}

export function Image({path, caption, style}: {path: string, caption?: string, style?: React.CSSProperties}) {

  function enlargeImage()  {
    var image = document.getElementById(path)?.classList;
    var overlay = document.getElementById('overlay')?.classList;
    if (image?.contains("ImageEnlarged") ){
        overlay?.remove("Overlay")
        image?.remove("ImageEnlarged")
        currentlyEnlargedImage = null;
    } 
    else {
        currentlyEnlargedImage = path;
        overlay?.add("Overlay")
        image?.add("ImageEnlarged");
    }
  }

  return (
    <div className='Image' >
      <img style={style} id={path} alt={path} src={path} onClick={enlargeImage} />
      <span>{caption}</span>
    </div>
  );
}

export function Header(props: any) {
  return (
    <h4 className="Header">
        <span>
         <p>
            {props.children}
        </p>
      </span>
    </h4>);
}

export function Title(props: any, undertext?: string) {
  return (
    <h2 className="Title">
        <span>

    <p>{props.children}</p>
    {
      undertext != null ? (
        <p className="Undertext">{props.undertext}</p>
      ) : (<></>)
    }
        </span>
    </h2>);
}

export function Paragraph(props: any) {
  return (
    <span>
    <p className="Paragraph">
    {props.children}
    </p>
    </span>
    );
}

export function PageDate({date}: {date: Date}) {
  return (
    <span className="Date">
    {date.getDay()}/{date.getMonth()}/{date.getFullYear()}
    </span>
    );
}
