import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Article } from './article';

@Injectable()
export class ArticleService {
    //URLs for CRUD operations
    allArticlesUrl = "http://localhost:8080/all-articles";
    articleUrl = "http://localhost:8080/article";
    //Create constructor to get Http instance
    constructor(private http:Http) {
    }
    //Fetch all articles
    getAllArticles(): Observable<Article[]> {
        return this.http.get(this.allArticlesUrl)
            .map(this.extractData)
            .catch(this.handleError);

    }
    //Create article
    createArticle(article: Article): Observable<number> {
        const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.articleUrl, article, options)
            .map(success => success.status)
            .catch(this.handleError);
    }
    //Fetch article by id
    getArticleById(articleId: string): Observable<Article> {
        const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        const cpParams = new URLSearchParams();
        cpParams.set('id', articleId);
        const options = new RequestOptions({ headers: cpHeaders, params: cpParams });
        return this.http.get(this.articleUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //Update article
    updateArticle(article: Article): Observable<number> {
        const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.articleUrl, article, options)
            .map(success => success.status)
            .catch(this.handleError);
    }
    //Delete article
    deleteArticleById(articleId: string): Observable<number> {
        const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        const cpParams = new URLSearchParams();
        cpParams.set('id', articleId);
        const options = new RequestOptions({ headers: cpHeaders, params: cpParams });
        return this.http.delete(this.articleUrl, options)
            .map(success => success.status)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        const body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}