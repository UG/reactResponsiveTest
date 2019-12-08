import React from 'react';

export default function pcsite() {
    var test = 'hoge';
    var html = `
    <br>
    <br>
    <br>
    <div class="center">
        <div class="yellowBackground">
            <div class="stepBox">
                <span class="circleStep">1</span>
                <p>test text</p>
            </div>
            <div class="stepBox">
                <span class="circleStep">2</span>
                <p>test text</p>
            </div>
            <div class="stepBox">
                <span class="circleStep">3</span>
                <p>${test}</p>
            </div>
        </div>
    </div>
    `;
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}