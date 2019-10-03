import { statusHTTPCode } from './../utils/statusHTTP';
import * as EstabelecimentoPlanoService from '../service/EstabelecimentoPlanoService';
import { Request, Response } from 'express';

export let get = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimentoPlano = await EstabelecimentoPlanoService.selectAll(request.query);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(estabelecimentoPlano);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let getById = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimentoPlano = await EstabelecimentoPlanoService.selectById(request.params.id);
        response.status(statusHTTPCode.sucessResponse.Accepted);
        response.send(estabelecimentoPlano);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let post = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimentoPlano = await EstabelecimentoPlanoService.save(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(estabelecimentoPlano);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let put = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimentoPlano = await EstabelecimentoPlanoService.upgrade(request.body);
        response.status(statusHTTPCode.sucessResponse.Created);
        response.send(estabelecimentoPlano);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};

export let del = async (request: Request, response: Response) => {
    try{
        // TODO: Validacao das regras de negocio
        const estabelecimentoPlano = await EstabelecimentoPlanoService.remove(request.body);
        response.status(statusHTTPCode.sucessResponse.Ok);
        response.send(estabelecimentoPlano);
    }catch(err){
        response.status(statusHTTPCode.serverErrorResponse.InternalServerError);
        response.end(err.message)
    }
};
