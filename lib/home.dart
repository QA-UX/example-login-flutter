import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Bem Vindo')
      ),
      body: Container(
        child: Center(child: Text('Bem Vindo', style: TextStyle(fontSize: 32.0))),
      ),
    );
  }
}