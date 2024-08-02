import 'package:dio/dio.dart';
import 'package:cctv_pay/data.dart';

class DbClassListUsers {
  Future<List<ListUsers>?> listusersAll(String query) async {
    String urlAPI = 'https://www.melivecode.com/api/users';

    try {
      Response response = await Dio().get(urlAPI);
      if (response.statusCode == 200) {
        final listusers = ListUsers.fromJsonList(response.data);
        return listusers?.where((user) {
          final fnameLower = user.fname?.toLowerCase();
          final lnameLower = user.lname?.toLowerCase();
          final searchLower = query.toLowerCase();

          return fnameLower!.contains(searchLower) || lnameLower!.contains(searchLower);
        }).toList();
      } else {
        throw Exception('Failed to load data');
      }
    } catch (e) {
      print('Error: $e');
      return null;
    }
  }
}
