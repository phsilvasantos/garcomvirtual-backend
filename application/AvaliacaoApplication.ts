import { statusHTTPCode } from './../utils/statusHTTP';
import * as AvaliacaoService from '../service/AvaliacaoService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const avaliacao = await AvaliacaoService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(avaliacao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const avaliacao = await AvaliacaoService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(avaliacao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const avaliacao = await AvaliacaoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(avaliacao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const avaliacao = await AvaliacaoService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(avaliacao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const avaliacao = await AvaliacaoService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(avaliacao);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
