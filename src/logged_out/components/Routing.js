import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import JobSeekers from "./JobSeekers";
import { Register } from "./register_login/Register";
import { Contact } from "./register_login/Contact";
import { Employer } from "./register_login/Employer";
import { JobListing } from "./register_login/JobListing";
import { Jobposting } from "./register_login/Jobposting";
import { Thank } from "./Thank";
import { Applications } from "./Applications";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome, openRegisterDialog, openLoginDialog } = props;
  useLocationBlocker();
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/job_seekers"
        component={JobSeekers}
        openRegisterDialog={openRegisterDialog}
        openLoginDialog={openLoginDialog}
        // selectBlog={selectBlog}
        // blogPosts={blogPosts}
      />
      <PropsRoute
        exact
        path="/register/:jobid"
        component={Register}
      />
      <PropsRoute
        exact
        path="/register/"
        component={JobListing}
      />
      <PropsRoute
        exact
        path="/contact"
        component={Contact}
      />
      <PropsRoute
        exact
        path="/employers"
        component={Employer}
      />
      <PropsRoute
        exact
        path="/joblistings"
        component={JobListing}
        openLoginDialog={openLoginDialog}
      />
      <PropsRoute
        exact
        path="/jobposting"
        component={Jobposting}
        openLoginDialog={openLoginDialog}
      />
      <PropsRoute
        exact
        path="/applicants/:jobid"
        component={Applications}
      />
      <PropsRoute path="/thank" component={Thank} />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
