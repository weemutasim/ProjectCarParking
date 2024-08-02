class ListUsers {
  int? id;
  String? fname;
  String? lname;
  String? username;
  String? avatar;

  ListUsers.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    fname = json['fname'];
    lname = json['lname'];
    username = json['username'];
    avatar = json['avatar'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = this.id;
    data['fname'] = this.fname;
    data['lname'] = this.lname;
    data['username'] = this.username;
    data['avatar'] = this.avatar;
    return data;
  }

  static List<ListUsers>? fromJsonList(List list) => list.map((item) => ListUsers.fromJson(item)).toList();
}