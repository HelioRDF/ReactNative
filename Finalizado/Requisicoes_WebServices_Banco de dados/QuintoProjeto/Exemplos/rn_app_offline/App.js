import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, NetInfo, AsyncStorage } from 'react-native';
import Item from './src/Item';

export default class TodoOnline extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lista:[],
			input:'',
			netstatus:0
		};

		this.url = 'https://b7web.com.br/todo/49833';

		this.loadLista = this.loadLista.bind(this);
		this.addButton = this.addButton.bind(this);
		this.conEvent = this.conEvent.bind(this);
		this.sincronizar = this.sincronizar.bind(this);
		this.excluir = this.excluir.bind(this);
		this.atualizar = this.atualizar.bind(this);

		NetInfo.addEventListener('connectionChange', this.conEvent);

		this.loadLista();
	}

	conEvent(info) {
		let state = this.state;

		if(info.type == 'none') {
			state.netstatus = 0;
		} else {
			state.netstatus = 1;
		}

		this.setState(state);

		if(state.lista.length == 0) {
			this.loadLista();
		}
	}

	loadLista() {
		if(this.state.netstatus == 1) {

			fetch(this.url)
				.then((r)=>r.json())
				.then((json)=>{
					let state = this.state;
					state.lista = json.todo;
					this.setState(state);

					let lista = JSON.stringify(json.todo);
					AsyncStorage.setItem('lista', lista);
				});

		} else {

			AsyncStorage.getItem('lista').then((v)=>{
				let state = this.state;

				if(v != '') {
					let listaJSON = JSON.parse(v);
					state.lista = listaJSON;
				}

				this.setState(state);
			});

		}
	}

	addButton() {
		AsyncStorage.getItem('lista').then((v)=>{
			let state = this.state;
			let listaJSON = JSON.parse(v);
			listaJSON.push({
				item:this.state.input,
				done:'0',
				id:0
			});

			state.lista = listaJSON;

			let listaStr = JSON.stringify(listaJSON);
			AsyncStorage.setItem('lista', listaStr);

			state.input = '';
			this.setState(state);
		});
	}

	sincronizar() {
		if(this.state.netstatus == 1) {
			AsyncStorage.getItem('lista').then((v)=>{
				fetch(this.url+'/sync', {
					method:'POST',
					headers:{
						'Accept':'application/json',
						'Content-Type':'application/json'
					},
					body:JSON.stringify({
						json:v
					})
				})
				.then((r)=>r.json())
				.then((json)=>{
					if(json.todo.status) {
						alert("Itens sincronizados com sucesso!");
					} else {
						alert("Tente mais tarde!");
					}
				});
			});
		} else {
			alert("Você está OFFLINE!");
		}
	}

	excluir(id) {
		//alert("Excluindo item... #"+id);
		AsyncStorage.getItem('lista').then((v)=>{
			let state = this.state;
			let listaJSON = JSON.parse(v);

			for(var i in listaJSON) {
				if(listaJSON[i].id == id) {
					listaJSON.splice(i, 1);
				}
			}

			state.lista = listaJSON;

			let listaStr = JSON.stringify(listaJSON);
			AsyncStorage.setItem('lista', listaStr);

			this.setState(state);
		});
	}

	atualizar(id, done) {
		//alert("Atualizando #"+id+" com done: "+done);
		AsyncStorage.getItem('lista').then((v)=>{
			let state = this.state;
			let listaJSON = JSON.parse(v);

			for(var i in listaJSON) {
				if(listaJSON[i].id == id) {
					if(done == 'sim') {
						listaJSON[i].done = '1';
					}  else {
						listaJSON[i].done = '0';
					}
				}
			}

			state.lista = listaJSON;

			let listaStr = JSON.stringify(listaJSON);
			AsyncStorage.setItem('lista', listaStr);

			this.setState(state);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.addArea}>
					<Text style={styles.addTxt}>Adicione uma nova tarefa</Text>
					<TextInput style={styles.input} onChangeText={(text) => {
						let state = this.state;
						state.input = text;
						this.setState(state);
					}} value={this.state.input} />
					<Button title="Adicionar" onPress={this.addButton} />
				</View>
				<FlatList 
					data={this.state.lista}
					renderItem={({item})=> <Item onDelete={this.excluir} onUpdate={this.atualizar} data={item} url={this.url} loadFunction={this.loadLista} />}
					keyExtractor={(item, index)=>item.id}
				/>
				<View style={styles.statusView}>
					<Text style={styles.statusText}>{this.state.netstatus}</Text>
				</View>
				<View style={styles.statusView}>
					<Button title="Sincronizar" onPress={this.sincronizar} />
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:20
	},
	addArea:{
		marginBottom:20,
		backgroundColor:'#DDDDDD'
	},
	addTxt:{
		fontSize:14,
		textAlign:'center',
		marginBottom:10,
		marginTop:10
	},
	input:{
		height:40,
		backgroundColor:'#CCCCCC',
		marginLeft:20,
		marginRight:20,
		paddingLeft:10,
		paddingRight:10
	},
	statusView:{
		height:50,
		backgroundColor:'#EEEEEE'
	},
	statusText:{
		fontSize:23,
		textAlign:'center'
	}
});






