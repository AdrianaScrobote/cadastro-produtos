import React from 'react'

import ProdutoService from '../../app/produtoService'

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false
}

class CadastroProduto extends React.Component{

    state = estadoInicial

    constructor(){
        super()
        this.service = new ProdutoService()
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name
        this.setState({ [nomeCampo]: valor})
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.name,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }

        this.service.salvar(produto)
        this.limparCampos()
        this.setState({sucesso: true})
        console.log("Dados salvos com sucesso")

        console.log(this.state)
    }

    limparCampos = () => {
        this.setState(estadoInicial)
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>

                <div className="card-body">

                    { this.state.sucesso &&
                        (
                            <div class="alert alert-dismissible alert-success">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Ok!</strong> Dados salvos com sucesso.
                            </div>
                        )

                    }

                    
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" 
                                       name="nome" 
                                       onChange={this.onChange}
                                       value={this.state.nome} 
                                       className="form-control">
                                </input>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" 
                                       name="sku" 
                                       onChange={this.onChange}
                                       value={this.state.sku} 
                                       className="form-control">
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea name="descricao" 
                                          onChange={this.onChange}
                                          value={this.state.descricao} 
                                          className="form-control"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input name="preco" 
                                       type="text" 
                                       onChange={this.onChange}
                                       value={this.state.preco} 
                                       className="form-control">
                                </input>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input name="fornecedor" 
                                       type="text" 
                                       onChange={this.onChange}
                                       value={this.state.fornecedor} 
                                       className="form-control">
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.limparCampos} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastroProduto