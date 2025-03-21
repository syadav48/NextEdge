"use client"
import Link from "next/link";
import {use} from 'react'
import React from "react";

//In case of Client component use use hook
// IN case of Server compoent use async await.
export default  function NewsArcticle({params, searchParams}: {
    params: Promise<{articleId: string}>
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>
}){
    const {articleId} =  use(params);
    const {lang = "en"} = use (searchParams);
    return(
        <div>
            <h1>News Article {articleId}</h1>
            <h1>Reading in {lang}</h1>
            <div>
                <Link href={`articles/${articleId}?lang=en`}>English</Link>
                <Link href={`articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    )
}