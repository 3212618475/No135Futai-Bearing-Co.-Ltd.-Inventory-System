<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='cangkurenyuan'"  label='仓库人员姓名' prop="cangkurenyuanName">
               <el-input v-model="ruleForm.cangkurenyuanName"  placeholder='仓库人员姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='cangkurenyuan'"  label='仓库人员手机号' prop="cangkurenyuanPhone">
               <el-input v-model="ruleForm.cangkurenyuanPhone"  placeholder='仓库人员手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='cangkurenyuan'"  label='仓库人员身份证号' prop="cangkurenyuanIdNumber">
               <el-input v-model="ruleForm.cangkurenyuanIdNumber"  placeholder='仓库人员身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='cangkurenyuan'" label='仓库人员照片' prop="cangkurenyuanPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.cangkurenyuanPhoto?$base.url+ruleForm.cangkurenyuanPhoto:''"
                         @change="cangkurenyuanPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='cangkurenyuan'"  label='现住址' prop="xiaoshourenyuanZhuzhi">
               <el-input v-model="ruleForm.xiaoshourenyuanZhuzhi"  placeholder='现住址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='cangkurenyuan'"  label='电子邮箱' prop="cangkurenyuanEmail">
               <el-input v-model="ruleForm.cangkurenyuanEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='xiaoshourenyuan'"  label='销售人员姓名' prop="xiaoshourenyuanName">
               <el-input v-model="ruleForm.xiaoshourenyuanName"  placeholder='销售人员姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='xiaoshourenyuan'"  label='销售人员手机号' prop="xiaoshourenyuanPhone">
               <el-input v-model="ruleForm.xiaoshourenyuanPhone"  placeholder='销售人员手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='xiaoshourenyuan'"  label='销售人员身份证号' prop="xiaoshourenyuanIdNumber">
               <el-input v-model="ruleForm.xiaoshourenyuanIdNumber"  placeholder='销售人员身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='xiaoshourenyuan'" label='销售人员照片' prop="xiaoshourenyuanPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.xiaoshourenyuanPhoto?$base.url+ruleForm.xiaoshourenyuanPhoto:''"
                         @change="xiaoshourenyuanPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='xiaoshourenyuan'"  label='现住址' prop="xiaoshourenyuanZhuzhi">
               <el-input v-model="ruleForm.xiaoshourenyuanZhuzhi"  placeholder='现住址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='xiaoshourenyuan'"  label='电子邮箱' prop="xiaoshourenyuanEmail">
               <el-input v-model="ruleForm.xiaoshourenyuanEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users'|| flag=='register'
|| flag=='register'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
        ruleForm: {},
        flag: '',
        usersFlag: false,
        // sexTypesOptions : [],
// 注册表 仓库人员
    // 注册的类型字段 仓库人员
        // 性别
        sexTypesOptions : [],
// 注册表 销售人员
    // 注册的类型字段 销售人员
        // 性别
        sexTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
// 注册表 仓库人员
// 注册表 销售人员
      } else {
        this.$message.error(data.msg);
      }
    });

// 注册表 仓库人员 的级联表
// 注册表 销售人员 的级联表

      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
              this.sexTypesOptions = data.data.list;
          } else {
              this.$message.error(data.msg);
          }
      });
  },
  methods: {
    chongzhi() {
      this.$router.replace({ path: "/pay" });
    },
    tixian() {
      let _this=this;
      this.$confirm(`确定要提现么?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
      }).then(() => {
          _this.ruleForm.newMoney=0;
          _this.$http({
              url: `${this.$storage.get("sessionTable")}/update`,
              method: "post",
              data: this.ruleForm
          }).then(({ data }) => {
              if (data && data.code === 0) {
                  _this.$message({message: "提现成功",type: "success",duration: 1500,onClose: () => {}});
              } else {this.$message.error(data.msg);}
          });
      });
    },
    cangkurenyuanPhotoUploadChange(fileUrls) {
        this.ruleForm.cangkurenyuanPhoto = fileUrls;
    },
    xiaoshourenyuanPhotoUploadChange(fileUrls) {
        this.ruleForm.xiaoshourenyuanPhoto = fileUrls;
    },


    onUpdateHandler() {
                         if((!this.ruleForm.cangkurenyuanName)&& 'cangkurenyuan'==this.flag){
                             this.$message.error('仓库人员姓名不能为空');
                             return
                         }

                             if( 'cangkurenyuan' ==this.flag && this.ruleForm.cangkurenyuanPhone&&(!isMobile(this.ruleForm.cangkurenyuanPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.cangkurenyuanIdNumber)&& 'cangkurenyuan'==this.flag){
                             this.$message.error('仓库人员身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.cangkurenyuanPhoto)&& 'cangkurenyuan'==this.flag){
                             this.$message.error('仓库人员照片不能为空');
                             return
                         }

                         if((!this.ruleForm.xiaoshourenyuanZhuzhi)&& 'cangkurenyuan'==this.flag){
                             this.$message.error('现住址不能为空');
                             return
                         }

                             if( 'cangkurenyuan' ==this.flag && this.ruleForm.cangkurenyuanEmail&&(!isEmail(this.ruleForm.cangkurenyuanEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.xiaoshourenyuanName)&& 'xiaoshourenyuan'==this.flag){
                             this.$message.error('销售人员姓名不能为空');
                             return
                         }

                             if( 'xiaoshourenyuan' ==this.flag && this.ruleForm.xiaoshourenyuanPhone&&(!isMobile(this.ruleForm.xiaoshourenyuanPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.xiaoshourenyuanIdNumber)&& 'xiaoshourenyuan'==this.flag){
                             this.$message.error('销售人员身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.xiaoshourenyuanPhoto)&& 'xiaoshourenyuan'==this.flag){
                             this.$message.error('销售人员照片不能为空');
                             return
                         }

                         if((!this.ruleForm.xiaoshourenyuanZhuzhi)&& 'xiaoshourenyuan'==this.flag){
                             this.$message.error('现住址不能为空');
                             return
                         }

                             if( 'xiaoshourenyuan' ==this.flag && this.ruleForm.xiaoshourenyuanEmail&&(!isEmail(this.ruleForm.xiaoshourenyuanEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
        if((!this.ruleForm.sexTypes) && (1==2|| flag=='cangkurenyuan'
|| flag=='xiaoshourenyuan')){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
