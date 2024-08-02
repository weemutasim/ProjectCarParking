import 'dart:async';
import 'package:cctv_pay/DbClass.dart';
import 'package:cctv_pay/data.dart';
import 'package:cctv_pay/search_widget.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key, required this.screenWidth, required this.screenHeight});

  final double screenWidth;
  final double screenHeight;

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String query = '';
  Timer? debouncer;
  List<ListUsers> _listusers = [];
  final DbClassListUsers dbClassListUsers = DbClassListUsers();

  @override
  void initState() {
    super.initState();
    _databasesListQue();
  }

  @override
  void dispose() {
    debouncer?.cancel();
    super.dispose();
  }

  void debounce(VoidCallback callback, {Duration duration = const Duration(milliseconds: 500)}) {
    if (debouncer != null) {
      debouncer!.cancel();
    }
    debouncer = Timer(duration, callback);
  }

  Future<void> _databasesListQue() async {
    final users = await dbClassListUsers.listusersAll(query);
    setState(() {
      _listusers = users ?? [];
    });
  }

  Future<void> searchBook(String query) async {
    debounce(() async {
      final users = await dbClassListUsers.listusersAll(query);
      if (!mounted) return;
      setState(() {
        this.query = query;
        this._listusers = users ?? [];
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        buildSearch(),
        Expanded(
          child: ListView.builder(
            itemCount: _listusers.length,
            itemBuilder: (context, index) {
              final users = _listusers[index];
              return buildBook(users);
            },
          ),
        ),
      ],
    );
  }

  Widget buildSearch() => SearchWidget(
    text: query,
    hintText: 'Title or Author Name',
    onChanged: searchBook,
  );

  Widget buildBook(ListUsers users) => Padding(
    padding: const EdgeInsets.all(10),
    child: Container(
      // width: 200,
      height: 100,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Colors.amber[200],
      ),
      child: ListTile(
        onTap: () {
          print('data');
        },
        title: Text(users.fname.toString()),
        subtitle: Text(users.lname.toString()),
      ),
    ),
  );
}
