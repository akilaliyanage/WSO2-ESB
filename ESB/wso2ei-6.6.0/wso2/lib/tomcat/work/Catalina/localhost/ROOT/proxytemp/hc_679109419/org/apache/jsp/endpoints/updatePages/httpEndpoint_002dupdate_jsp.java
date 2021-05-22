/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.22
 * Generated at: 2021-05-22 14:20:57 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.endpoints.updatePages;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.apache.axiom.om.OMElement;
import org.apache.synapse.config.xml.endpoints.TemplateSerializer;
import org.apache.synapse.endpoints.Template;
import org.wso2.carbon.endpoint.ui.endpoints.http.HttpEndpoint;
import org.wso2.carbon.endpoint.ui.util.ListEndpointDesignerHelper;

public final class httpEndpoint_002dupdate_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("org.apache.axiom.om.OMElement");
    _jspx_imports_classes.add("org.wso2.carbon.endpoint.ui.util.ListEndpointDesignerHelper");
    _jspx_imports_classes.add("org.apache.synapse.endpoints.Template");
    _jspx_imports_classes.add("org.wso2.carbon.endpoint.ui.endpoints.http.HttpEndpoint");
    _jspx_imports_classes.add("org.apache.synapse.config.xml.endpoints.TemplateSerializer");
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET, POST or HEAD. Jasper also permits OPTIONS");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

    boolean isEditingListEndpoint = session.getAttribute("isEditingListEndpoint") != null ? true : false;
    boolean isFromTemplateEditor = session.getAttribute("endpointTemplate") != null ? true : false;

    String endpointName = request.getParameter("endpointName");
    String uriTemplate = request.getParameter("uriTemplate");
    String methodOption = request.getParameter("httpMethod");
  
    String description = request.getParameter("endpointDescription").trim();
    String errorCode = request.getParameter("suspendErrorCode");
    String suspendDuration = request.getParameter("suspendDuration");
    String suspendMaxDuration = request.getParameter("suspendMaxDuration");
    String factor = request.getParameter("factor");
    String retryErrorCode = request.getParameter("retryErroCode");
    String retriesOnTimeOut = request.getParameter("retryTimeOut");
    String retryDelay = request.getParameter("retryDelay");
    String disabledErrorCodes = request.getParameter("disabledErrorCodes");
    String action = request.getParameter("actionSelect");
    String actionDuration = null;
    if (action != null && !action.equals("neverTimeout")) {
        actionDuration = request.getParameter("actionDuration");
    }
    
    String properties = request.getParameter("endpointProperties");

    HttpEndpoint httpEndpoint = new HttpEndpoint();

    if (isEditingListEndpoint) {
        httpEndpoint = (HttpEndpoint) ListEndpointDesignerHelper.getEditingEndpoint(request, session);
    }
    if (endpointName != null) {
    	httpEndpoint.setEndpointName(endpointName);
    }
    if (uriTemplate != null) {
    	httpEndpoint.setUriTemplate(uriTemplate);
    }
    if ("get".equals(methodOption)) {
    	httpEndpoint.setHttpGet(true);
    } else if ("post".equals(methodOption)) {
    	httpEndpoint.setHttpPost(true);
    } else if ("patch".equals(methodOption)) {
    	httpEndpoint.setHttpPatch(true);
    } else if ("put".equals(methodOption)) {
    	httpEndpoint.setHttpPut(true);
    } else if ("delete".equals(methodOption)) {
        httpEndpoint.setHttpDelete(true);
    } else if ("head".equals(methodOption)) {
    	httpEndpoint.setHttpHead(true);
    } else if ("options".equals(methodOption)) {
        httpEndpoint.setHttpOptions(true);
    } else {
    	httpEndpoint.setHttpGet(false);
    	httpEndpoint.setHttpPost(false);
    	httpEndpoint.setHttpPatch(false);
    	httpEndpoint.setHttpPut(false);
    	httpEndpoint.setHttpDelete(false);
    	httpEndpoint.setHttpHead(false);
    	httpEndpoint.setHttpOptions(false);
    }

    if (description != null && !"".equals(description)) {
    	httpEndpoint.setDescription(description);
    } else {
    	httpEndpoint.setDescription("");
    }
    if (errorCode != null) {
    	httpEndpoint.setErrorCodes(errorCode);
    }
    if (suspendDuration != null) {
    	httpEndpoint.setSuspendDurationOnFailure(suspendDuration);
    }
    if (suspendMaxDuration != null) {
    	httpEndpoint.setMaxSusDuration(suspendMaxDuration);
    }
    if (factor != null) {
    	httpEndpoint.setSusProgFactor(factor);
    }
    if (retryErrorCode != null) {
    	httpEndpoint.setTimedOutErrorCodes(retryErrorCode);
    }
    if (retriesOnTimeOut != null) {
    	httpEndpoint.setRetryTimeout(retriesOnTimeOut);
    }
    if (retryDelay != null) {
    	httpEndpoint.setRetryDelay(retryDelay);
    	httpEndpoint.setRetryDelay(retryDelay);
    }
    if (disabledErrorCodes != null) {
    	httpEndpoint.setRetryDisabledErrorCodes(disabledErrorCodes);
    }
    if (action != null) {
        if (action.equals("discardMessage")) {
        	httpEndpoint.setTimeoutAction("discard");
        } else if (action.equals("executeFaultSequence")) {
        	httpEndpoint.setTimeoutAction("fault");
        } else {
        	httpEndpoint.setTimeoutAction("100");
        }
    }
    if (actionDuration != null) {
    	httpEndpoint.setTimeoutActionDur(actionDuration);
    }
    if (properties != null) {
    	httpEndpoint.setProperties(properties);
    } else {
    	httpEndpoint.setProperties(null);
    }

    OMElement endpointElement = httpEndpoint.serialize(null);
    String epConfig = endpointElement.toString();
    String configuration = null;

    if (isFromTemplateEditor) {
        String templateName = request.getParameter("templateName");
        Template template = new Template();
        if (templateName != null) {
            template.setName(templateName);
        }
        if (epConfig != null) {
            template.setElement(endpointElement);
        } else {
            template.setElement(httpEndpoint.getEmptyEndpointElement());
        }

        String paramCount = request.getParameter("propertyCount");
        int count = Integer.parseInt(paramCount);
        for (int i = 0; i < count; i++) {
            String paramName = request.getParameter("propertyName" + i);
            if (paramName != null && !"".equals(paramName.trim()) &&
                (!"name".equals(paramName.trim()) && !"uri".equals(paramName.trim()))) {
                template.addParameter(paramName);
            }
        }

        OMElement serializedTemplateElement = new TemplateSerializer().serializeEndpointTemplate(template,
                                                                                            null);
        configuration = serializedTemplateElement.toString();
    } else {
        configuration = epConfig;
    }

    if (!isEditingListEndpoint) {
        session.setAttribute("endpointConfiguration", configuration);
    }


      out.write('\n');
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
