import Vue from "vue";
export default Vue.mixin({
  methods: {
    jump(path) {
      return this.$router.push(path);
    },
    deleteFn(row, success, error) {
      console.log("删除", row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          if (success) success();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
          if (error) error();
        });
    },
  },
});
